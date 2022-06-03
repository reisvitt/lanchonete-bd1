import LocalStorage from '../../helpers/local_storage'

const mapa_de_rotas = {
  Gerente: ['/gerente', '/ala', '/perfil', '/logout'],
  Garçom: ['/garcom', '/ala',  '/mesa', '/perfil', '/logout'],
  Contas: ['/contas', '/perfil', '/logout'],
  Cozinheiro: ['/cozinha', '/mesa', '/perfil', '/logout'],
}

export const guardsRoutes = async (to, from, next) => {
  
  if(to?.location?.pathname === '/logout'){
    LocalStorage.remove('user')
    next.redirect(`/login`);
  }

  if (to.meta.auth) {
    try {
      const user = LocalStorage.getItem('user')
      if(!user){
        next.redirect(`/login?redirect=${btoa(window.location.href)}`);
      }

      const routes =  mapa_de_rotas[user?.employer_type?.title];

      if(to?.location?.pathname === '/'){
        next.redirect(routes[0]);
      }

      if(!routes.find(item => to?.location?.pathname.includes(item))){
        next.redirect(`/403`);
      }
      
      next();
    } catch (e) {
      next.redirect(`/login?redirect=${btoa(window.location.href)}`);
    }
  }
  next();
};
