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

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/auth', 'AuthController.store')

Route.get('/items', 'ItemsController.index')
Route.get('/items/:id', 'ItemsController.show')
Route.post('/items', 'ItemsController.store')
Route.put('/items/:id', 'ItemsController.update')
Route.delete('/items/:id', 'ItemsController.destroy')

Route.post('/order', 'OrdersController.store')
Route.get('/order/:id/', 'OrdersController.show')
Route.put('/order/:id/', 'OrdersController.update')
Route.delete('/order/:id/', 'OrdersController.destroy')

Route.get('/ala', 'AlasController.index')
Route.get('/ala/:id', 'AlasController.show')
Route.post('/ala', 'AlasController.store')

Route.get('/table', 'TablesController.index')
Route.get('/table/:id', 'OrdersController.showByTable')
Route.post('/table', 'TablesController.store')

Route.get('/order_item/', 'OrderItemsController.index')
Route.put('/order_item/:id', 'OrderItemsController.update')
