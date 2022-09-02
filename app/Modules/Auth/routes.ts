import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/auth', 'AuthController.store')
  Route.delete('/auth', 'AuthController.destroy')
}).prefix('/api')
