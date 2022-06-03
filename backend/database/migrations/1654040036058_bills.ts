import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('payment_date', { useTz: true })
      table.string('obs')
      table.double('total')
      table.double('total_payment')
      table.double('discount')
      table
        .integer('payment_method_id')
        .unsigned()
        .references('id')
        .inTable('payment_methods')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('table_id')
        .unsigned()
        .references('id')
        .inTable('tables')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at',)
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
