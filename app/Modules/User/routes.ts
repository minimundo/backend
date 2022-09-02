import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/users', 'UsersController')
    .apiOnly()
    .middleware({
      store: ['acl:admin'],
      update: ['acl:admin'],
      destroy: ['acl:admin'],
    })
}).prefix('/api')