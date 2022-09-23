import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Dev Skills' })
})

res.render('index', {title: 'Dev Skills'})

export { 
  router,
}
