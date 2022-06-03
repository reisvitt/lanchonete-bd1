import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('description')
      table
        .integer('created_by')
        .unsigned()
        .references('id')
        .inTable('employers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('order_item_id')
        .unsigned()
        .references('id')
        .inTable('order_items')
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
