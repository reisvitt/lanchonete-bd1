import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'

export default class OrderItemsController {
  // retonar um
  public async index (){
    const item = await Database.rawQuery(`
        SELECT 
          items.*, 
          order_items.order_id as order_id,
          order_items.quantity as quantity,
          order_statuses.title as status,
          to_jsonb(notes) as notes,
          order_items.id as id
        FROM order_items


        LEFT JOIN items 
        ON items.id = order_items.item_id

        LEFT JOIN order_statuses
        ON order_items.status_id = order_statuses.id

        LEFT JOIN notes
        ON notes.id = order_items.id

        INNER JOIN orders
        ON orders.id = order_items.order_id
        AND orders.open = true

        ORDER BY order_items.id

      `)

    return item.rows
  }
  // retonar um
  public async show ({request, response}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params.id){
      return response.badRequest()
    }

    const item = await Database.rawQuery(`
        SELECT * FROM order_items
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

    // verifica se existe
    const item = await this.show({request, response, ...ctx})

    if(!item){
      return response.notFound()
    }

    // faz update
    await Database.rawQuery(`
      UPDATE order_items SET 
        ${body?.status_id ? 'status_id = ' + body.status_id + ',' : ''}
        ${body?.quantity ? 'quantity = ' + body.quantity + ',' : ''}
        updated_at = '${DateTime.local()}'
      WHERE id = ${params.id};
    `)

    return response.noContent()
  }
}
