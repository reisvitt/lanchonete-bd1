import { DateTime } from 'luxon'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AlasController {
  // listagem
  public async index (){
    const alas = await Database.rawQuery(`
      SELECT * FROM alas
    `)

    return alas.rows
  }

  public async show ({request}: HttpContextContract){
    const {id} = request.params()

    const tables = await Database.rawQuery(`
      SELECT * FROM tables
      WHERE ala_id = ${id}
    `)

    return tables.rows
  }

  // criacao
  public async store ({request, response}: HttpContextContract){
    const body = request.body()

    // validacoes
    if(!body?.name || !body?.restaurant_id){
      return response.badRequest()
    }

    await Database.rawQuery(`
      INSERT INTO alas (name, restaurant_id, created_at, updated_at) 
      VALUES ('${body.name}', ${body.restaurant_id}, '${DateTime.local()}', '${DateTime.local()}');
    `)

    return response.noContent()
  }
}
