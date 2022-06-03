import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Restaurant from 'App/Models/Restaurant'

export default class RestaurantSeeder extends BaseSeeder {
  public async run () {
    await Restaurant.create({
      name: 'Restaurante Primavera',
      cnpj: '67.720.598/0001-64',
    })
  }
}
