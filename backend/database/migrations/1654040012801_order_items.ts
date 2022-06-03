import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'order_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('quantity').notNullable().unsigned()
      table
        .integer('status_id')
        .unsigned()
        .references('id')
        .inTable('order_statuses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('item_id')
        .unsigned()
        .references('id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
