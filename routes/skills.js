import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

//Get Skills listing
//GET localhost:3000/skills
router.get('/', skillsCtrl.index )

//GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

//GET localhost:3000/skills??
router.get('/:id', skillsCtrl.show)

//POST-localhost:3000/skills
router.post('/', skillsCtrl.create)

export {
  router
}
