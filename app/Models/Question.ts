import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, CherryPick } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Country from 'App/Models/Country'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public creatorId: number

  @belongsTo(() => User, { foreignKey: 'creatorId' })
  public creator: BelongsTo<typeof User>

  @column()
  public countryId: number

  @belongsTo(() => Country)
  public country: BelongsTo<typeof Country>

  @column()
  public grade: number

  @column()
  public wording: string

  @column()
  public answer1: string

  @column()
  public answer2: string

  @column()
  public answer3: string

  @column()
  public answer4: string

  @column()
  public correct_answer: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations(
        {
          creator: {
            fields: ['id', 'email', 'firstName', 'role'],
          },
        },
        false
      ),
    }
  }
}
