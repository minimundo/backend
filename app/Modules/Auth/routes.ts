import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/auth', 'Auth/AuthController.store')
  Route.delete('/auth', 'Auth/AuthController.destroy').middleware(['auth'])
}).prefix('/api')
