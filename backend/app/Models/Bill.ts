import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Bill extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public payment_date: DateTime

  @column()
  public obs: string

  @column()
  public total: number

  @column()
  public total_payment: number

  @column()
  public discount: number

  @column()
  public payment_method_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
