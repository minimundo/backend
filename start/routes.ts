/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/User/routes'
import 'App/Modules/Uploads/routes'
import 'App/Modules/Auth/routes'
import 'App/Modules/Country/routes'
import 'App/Modules/Question/routes'

Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

Route.group(() => {
  Route.any('/', async () => {
    return { message: 'This is the Mini Mundo api' }
  })
}).prefix('/api')
