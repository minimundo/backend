import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/auth', 'Auth/AuthController')
    .only(['store', 'destroy'])
    .middleware({
      destroy: ['auth'],
    })
}).prefix('/api')
