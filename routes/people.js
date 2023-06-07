const express = require('express')
const router = express.Router()
let { people } = require('../data')

const { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controllers/peopleController')


// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

//imp : another way of using routers

/* This code is defining routes for handling HTTP requests using the Express Router. */
router.route('/').get(getPeople).post(createPerson)

router.route('/postman').post(createPersonPostman)

router.route('/:id').put(updatePerson).delete(deletePerson)



module.exports = router