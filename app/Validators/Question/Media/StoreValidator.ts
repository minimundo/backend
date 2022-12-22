import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class StoreValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    file: schema.file({
      size: '5mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    }),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
