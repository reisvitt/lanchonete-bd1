import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

/**
 * 1 - listar todos os pedidos
 * 2 - listar todos os pedidos da mesa x
 * 3 - Listar todos os pedidos da mesa x com status y
 */
/*

const mock = {
  table_id: 3, // mesa 3
  order_by: 3, // empregado 3
  orders: [
    {
      item_id: 2, // item 2
      quantity: 1,
      note: 'muito molho',
    },
    {
      item_id: 2, // item 2
      quantity: 2,
      note: 'sem sal',
    },
  ],
}
*/

export default class OrdersController {
  /** LISTAGEM
   * 1 - Filtrar por status
   */
  public async index (){
    const items = await Database.rawQuery(`
      SELECT * FROM orders
    `)

    return items.rows
  }

  // criacao
  public async store ({request, response}: HttpContextContract){
    const body = request.body()

    //console.log('Ok')

    // validacoes order
    if(!body?.table_id || !body?.order_by || !body?.orders?.length){
      return response.badRequest('Atributo obrigatório')
    }

    // validacoes order item
    for (let orderItem of body?.orders){
      if(!orderItem?.item_id || !orderItem?.quantity){
        return response.badRequest('Atributo obrigatório em items')
      }
    }

    // verificar se tem alguma conta aberta na mesa x

    let table = await Database.rawQuery(`
      SELECT * FROM tables 
      WHERE id = ${body.table_id}  
    `)

    if(table.rows.length === 0){ // n existe esta mesa
      return response.notFound('Mesa não encontrada')
    }

    const order = await Order.create({
      order_date: DateTime.local(),
      table_id: body.table_id,
      order_by: body.order_by,
    })

    for await (let orderItem of body?.orders){
      // cria item do pedido
      await Database.rawQuery(`
        INSERT INTO order_items (quantity, status_id, item_id, order_id) 
        VALUES (${orderItem.quantity}, 1, ${orderItem.item_id}, ${order.id});
      `)

      // criar notes
    }

    return response.noContent()
  }

  // retonar um
  public async show ({request, response}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params.id){
      return response.badRequest()
    }

    const order = await Database.rawQuery(`
      SELECT orders.*
      FROM orders
      WHERE orders.id = ${params.id}
    `)

    const items = await Database.rawQuery(`
      SELECT 
        items.*,
        order_items.quantity as quantity,
        order_statuses.title as status,
        to_jsonb(notes) as notes
      FROM order_items

      LEFT JOIN items 
      ON items.id = order_items.item_id

      LEFT JOIN order_statuses
      ON order_items.status_id = order_statuses.id

      LEFT JOIN notes
      ON notes.id = order_items.id

      WHERE order_items.order_id = ${params.id}
    `)

    if(order.rows.length > 0){
      return {
        ...order.rows[0],
        items: items.rows,
      }
    }

    return response.notFound()
  }

  // retonar um
  public async showByTable ({request, response}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params.id){
      return response.badRequest()
    }

    const order = await Database.rawQuery(`
      SELECT orders.*, 
        CASE
          WHEN array_agg(order_items.*) = '{NULL}'
          THEN NULL
          ELSE json_agg(order_items)
        END items
    
      FROM orders

      INNER JOIN tables
      ON tables.id = ${params.id}

      LEFT JOIN (
        SELECT 
          items.*,
          order_items.order_id as order_id,
          order_items.quantity as quantity,
          order_statuses.title as status,
          to_jsonb(notes) as notes
        FROM order_items

        LEFT JOIN items 
        ON items.id = order_items.item_id

        LEFT JOIN order_statuses
        ON order_items.status_id = order_statuses.id

        LEFT JOIN notes
        ON notes.id = order_items.id

      ) as order_items
      ON order_items.order_id = orders.id

      WHERE orders.table_id = ${params.id}
      AND orders.open = true
      GROUP BY orders.id
    `)

    if(order.rows.length === 0){
      return []
    }
    return order.rows
  }

  /*
  const mock = {
    orders: [
      {
        order_item_id: 1,
        quantity: 1,
        note: 'muito molho',
        status_id: 5
      },
      {
        order_item_id: 2,
        quantity: 2,
        note: 'sem sal',
        status_id: 2
      },
    ],
  }
  */

  // altera um
  public async update ({request, response}: HttpContextContract){
    const body = request.body()
    const params = request.params()

    //console.log('Ok')

    // validacoes order
    if(!params?.id || !body?.orders?.length){
      return response.badRequest('Atributos obrigatório')
    }

    // validacoes order item
    for (let orderItem of body?.orders){
      if(!orderItem?.order_item_id || !orderItem?.quantity){
        return response.badRequest('Atributos obrigatórios em items')
      }
    }

    let order = await Database.rawQuery(`
      SELECT * FROM orders WHERE id = ${params.id};
    `)

    if(order.rows.length > 0){
      order = order.rows[0]
    }else{
      return response.notFound()
    }

    // verificar se tem alguma conta aberta na mesa x
    let table = await Database.rawQuery(`
      SELECT * FROM tables 
      WHERE id = ${order.table_id}  
    `)

    if(table.rows.length === 0){ // n existe esta mesa
      return response.notFound('Mesa não encontrada')
    }

    table = table.rows[0] // table

    if(!table.open){ // se n tiver conta aberta
      return response.nonAuthoritativeInformation('Não autorizado')
    }

    for await (let orderItem of body?.orders){
      // cria item do pedido
      await Database.rawQuery(`
        UPDATE order_items SET
          quantity = ${orderItem.quantity},
          ${ orderItem.status_id && 'status_id = ' + orderItem.status_id }
        WHERE id = ${orderItem.order_item_id}
      `)
    }

    return response.noContent()
  }

  // altera um
  public async destroy ({request, response}: HttpContextContract){
    const params = request.params()

    // validacoes
    if(!params?.id){
      return response.badRequest()
    }

    let order = await Database.rawQuery(`
      SELECT * FROM orders WHERE id = ${params.id};
    `)

    if(order.rows.length > 0){
      order = order.rows[0]
    }else{
      return response.notFound()
    }

    // verificar se tem alguma conta aberta na mesa x
    let table = await Database.rawQuery(`
      SELECT * FROM tables 
      WHERE id = ${order.table_id}  
    `)

    if(table.rows.length === 0){ // n existe esta mesa
      return response.notFound('Mesa não encontrada')
    }

    table = table.rows[0] // table

    if(table.open){ // se n tiver conta aberta
      await Database.rawQuery(`
        UPDATE tables SET open = false, updated_at = '${DateTime.local()}' WHERE id = ${table.id}
      `)
    }

    await Database.rawQuery(`
      DELETE FROM order_items

      WHERE order_items.order_id = ${params.id}
    `)

    await Database.rawQuery(`
      DELETE FROM orders 
      WHERE id = ${params.id};
    `)

    return response.noContent()
  }
}
