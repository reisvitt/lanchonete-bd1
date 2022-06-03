import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PaymentMethod from 'App/Models/PaymentMethod'

export default class PaymentMethodSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await PaymentMethod.createMany([
      {
        title:'Cartão de crédito',
      },
      {
        title:'Dinheiro',
      },
      {
        title:'Pix',
      },
    ])
  }
}
