const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

//wrap the app in a superagent object
//tests can use it to make HTTP requests to the backend
const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
},100000)

test('there are two notes', async () => {
  const response = await api.get('/api/notes')

  expect(response.body).toHaveLength(1)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/notes')

  expect(response.body[0].content).toBe('HTML is easy')
})

//afterAll - runs a function after all tests in this file have completed
afterAll(async () => {
  await mongoose.connection.close()
})

