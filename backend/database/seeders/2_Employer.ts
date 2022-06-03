import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employer from 'App/Models/Employer'

export default class EmployerSeeder extends BaseSeeder {
  public async run () {
    await Employer.createMany([
      {
        email: 'vitor+1@gmail.com',
        employer_type_id: 3,
        name: 'Vitor+1',
        last_name: 'Reis',
        password: '1234',
        salary: 600.00,
      },
      {
        email: 'vitor+2@gmail.com',
        employer_type_id: 1,
        name: 'Vitor+2',
        last_name: 'Reis',
        password: '1234',
        salary: 600.00,
      },
      {
        email: 'vitor+3@gmail.com',
        employer_type_id: 2,
        name: 'Vitor+3',
        last_name: 'Reis',
        password: '1234',
        salary: 600.00,
      },
    ])
  }
}
