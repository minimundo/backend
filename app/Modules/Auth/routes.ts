import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/signin/teacher', 'AuthController.login')
}).prefix('/api')
