import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderStatus from 'App/Models/OrderStatus'

export default class OrderStatusSeeder extends BaseSeeder {
  public async run () {
    await OrderStatus.createMany([
      {
        title: 'Aguardando',
      },
      {
        title: 'Em andamento',
      },
      {
        title: 'Pronto',
      },
      {
        title: 'Entregue',
      },
      {
        title: 'Cancelado',
      },
    ])
  }
}
