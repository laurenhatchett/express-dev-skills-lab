import { skill } from '../models/skill.js'

function index(req, res) {
  skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}