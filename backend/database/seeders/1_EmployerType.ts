import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EmployerType from 'App/Models/EmployerType'

export default class EmployerTypeSeeder extends BaseSeeder {
  public async run () {
    await EmployerType.createMany([
      {
        title: 'Garçom',
      },
      {
        title: 'Cozinheiro',
      },
      {
        title: 'Gerente',
      },
    ])
  }
}
