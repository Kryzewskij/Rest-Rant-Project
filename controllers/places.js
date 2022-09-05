const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    let places = [{
        name: 'Big Beefy Burgers!',
        city: 'Seattle',
        state: 'WA',
        cuisines: '100% USDA choice beef',
        pic: '/images/o.jpg'
      }, {
        name: 'Burgers and Beer',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Craft beer and burgers',
        pic: '/images/th.jpeg'
      }]
    res.render('places/index', {places})

  })

  router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})







module.exports = router
