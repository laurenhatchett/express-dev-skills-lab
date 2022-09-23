import { Router } from 'express'

const router = Router()

/* GET skills listing. */

//localhost:3000/skills
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
