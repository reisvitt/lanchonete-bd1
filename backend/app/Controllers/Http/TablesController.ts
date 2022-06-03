import { DateTime } from 'luxon'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TablesController {
  // listagem
  public async index (){
    const tables = await Database.rawQuery(`
      SELECT * FROM tables
    `)

    return tables.rows
  }

  // criacao
  public async store ({request, response}: HttpContextContract){
    const body = request.body()

    // validacoes
    if(!body?.ala){
      return response.badRequest()
    }

    await Database.rawQuery(`
      INSERT INTO tables (ala_id, created_at, updated_at) 
      VALUES (${body.ala}, '${DateTime.local()}', '${DateTime.local()}');
    `)

    return response.noContent()
  }
}
