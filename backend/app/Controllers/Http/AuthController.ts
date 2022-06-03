import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store ({request, response}: HttpContextContract){
    const body = request.body()

    if(!body?.email || !body?.password){
      return response.badRequest()
    }

    // query para autenticacao
    try {
      const rows = await Database.rawQuery(`
        SELECT employers.*,
        
        to_jsonb(employer_types) as employer_type
        
        FROM employers 

        LEFT JOIN employer_types 
        ON employers.employer_type_id = employer_types.id

        WHERE employers.email = '${body?.email}'
        AND employers.password = '${body?.password}'

        
      `)

      // se houver mais de uma resposta, retornar usuario
      if(rows.rows.length > 0){
        const aux = {...rows.rows[0]}
        delete aux.password
        return aux
      }

      return response.notFound()
    } catch (error) {
      return response.notFound()
    }
  }
}
