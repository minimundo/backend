import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  @column()
  public flag_image: string
}
