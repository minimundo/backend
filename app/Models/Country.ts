import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import File from 'App/Models/File'
export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public continent:
    | 'América do Norte'
    | 'América Central'
    | 'América do Sul'
    | 'Europa'
    | 'África'
    | 'Oceania'
    | 'Ásia'
    | 'Antártida'

  @hasOne(() => File, {
    foreignKey: 'ownerId',
    onQuery: (query) => query.where({ fileCategory: 'flag' }),
  })
  public flag: HasOne<typeof File>
}
