const router = require('express').Router()

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
  res.send('POST /places')
})






module.exports = router
