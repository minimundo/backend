import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('teacher', 'TeachersController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      show: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
}).prefix('/api')
