import { DateTime } from 'luxon'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ItemsController {
  // listagem
  public async index (){
    const items = await Database.rawQuery(`
      SELECT * FROM items
    `)

    return items.rows
  }

  // criacao
  public async store ({request, response}: HttpContextContract){
    const body = request.body()

    // validacoes
    if(!body?.name || !body?.price){
      return response.badRequest()
    }

    await Database.rawQuery(`
      INSERT INTO items (name, description, price, created_at, updated_at) 
      VALUES ('${body.name}', '${body.description}', ${body.price}, '${DateTime.local()}', '${DateTime.local()}');
    `)

    return response.noContent()
  }

  // retonar um
  public async show ({request, response}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params.id){
      return response.badRequest()
    }

    const item = await Database.rawQuery(`
      SELECT * FROM items
      WHERE id = ${params.id}
    `)

    if(item.rows.length > 0){
      return item.rows[0]
    }

    return response.notFound()
  }

  // altera um
  public async update ({request, response, ...ctx}: HttpContextContract){
    const body = request.body()
    const params = request.params()

    // validacoes
    if(!body?.name || !body?.price || !params?.id){
      return response.badRequest()
    }

    // verifica se existe
    const item = await this.show({request, response, ...ctx})

    if(!item){
      return response.notFound()
    }

    // faz update
    await Database.rawQuery(`
      UPDATE items SET 
        name = '${body.name}',
        description = '${body.description}',
        price = ${body.price},
        updated_at = '${DateTime.local()}'
      WHERE id = ${params.id};
    `)

    return response.noContent()
  }

  // altera um
  public async destroy ({request, response, ...ctx}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params?.id){
      return response.badRequest()
    }

    // verifica se existe
    const item = await this.show({request, response, ...ctx})

    if(!item){
      return response.notFound()
    }

    // faz update

    await Database.rawQuery(`
      DELETE FROM items 
      WHERE id = ${params.id};
    `)

    return response.noContent()
  }
}
