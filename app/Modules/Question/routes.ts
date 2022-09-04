import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/questions', 'Questions/QuestionsController')
    .apiOnly()
    .middleware({
      store: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
}).prefix('/api')
