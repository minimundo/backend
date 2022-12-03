import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/users', 'Users/UsersController')
    .apiOnly()
    .middleware({
      store: ['acl:admin'],
      update: ['acl:admin'],
      destroy: ['acl:admin'],
    })
}).prefix('/api')

Route.get('/users/me', 'Users/UsersController.me').prefix('/api').middleware('auth')
