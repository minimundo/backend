import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/countries', 'Countries/CountriesController')
    .apiOnly()
    .middleware({
      store: ['acl:admin'],
      update: ['acl:admin'],
      destroy: ['acl:admin'],
    })
}).prefix('/api')
