const express = require('express')
const Shops = require('../models/shops.js')
const shops = express.Router()
// const isAuthenticated = (req, res, next) => {
//   if (req.session.currentUser) {
//     return next()
//   } else {
//     res.redirect('/sessions/new')
//   }
// }

/*
***************************
  Presentational Routes
***************************
*/

// Index:
shops.get('/', (req, res) => {
  Shops.find({}, (error, allshops) => {
    res.render('shops/index.ejs', {
      shops: allshops
      // ,currentUser: req.session.currentUser
    })
  })
})

// New:
shops.get('/new', /* isAuthenticated,*/ (req, res) => {
  res.render('new.ejs'
  // , {currentUser:
  //   req.session.currentUser}
)
})

shops.get('/seed', (req, res) => {
  Shops.create([
    {
      event: `Hometeam New Year\'s Rally 2019`,
      shop: 'Acro Yoga',
      host: 'Kaleigh Duncan',
      info: 'Learn to do acro yoga!',
      day: 'Saturday',
      date: '12/28/19',
      // (can I do the regexp with this?)
      startTime: '2:00',
      endTime: '2:45pm',
      location: 'In the field',
      price: 'free',
      img: 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/82758385_2653734098055163_5717487333750603776_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_eui2=AeELDqRk75BPm50D7xPwYmObN6aGACye-uavpVSg9fyiGm_JxRRDIXmbhwm06ioBzZ7jq3c6U4csHzY2mJrl84GkbHE_eNHJAjvdSuONSHBn_Q&_nc_ohc=wYrxm3K-KNYAX-oVMxd&_nc_ht=scontent.ftpa1-1.fna&oh=d2bf873afd7e82f1cffbae3f21f724f8&oe=5EBE21FF'
    },
    {
      event: 'Hometeam',
      shop: 'Flow Jam Skill Share',
      host: 'Jordan Smith',
      info: 'BYO hoops & Flow Toys',
      day: 'Sunday',
      date: '12/29/19',
      // (can I do the regexp with this?)
      startTime: '3:00',
      endTime: '3:45',
      ampm: 'pm',
      location: 'By the stages',
      price: 'free',
      img: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/78379809_2565167516911822_3421388385560821760_n.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_eui2=AeHlPrTHec9DniI5uENUPfiy0dme8epc1HNkUgUf3iDw-1lRnCbaTgHPSpyZaDhX-NpissKbvF04iNcAUpJKCbx-iboycwOC4gnOFS_rRujLYA&_nc_ohc=omyRgVhW8pAAX8dLQEY&_nc_ht=scontent.ftpa1-2.fna&oh=a4b29ac0a3a5d987cfa53423f19165cc&oe=5EF4B19D'
    },
    {
      event: 'Hometeam',
      shop: 'Life on the Road - Secrets to Full-Time RV Living',
      host: 'Kasandra & Johnny',
      info: 'Learn all about living on the road!',
      day: 'Sunday',
      date: '12/29/19',
      // (can I do the regexp with this?)
      startTime: '2:00',
      endTime: '2:45',
      ampm: 'pm',
      location: 'Rising Light Tent',
      price: 'free',
      img: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/83078981_2631508880277685_1741354650046562304_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_eui2=AeHJV3Mq4uCGusiKW7_Co5TDPf_jt7ePoBMGxzZCpY2MsQtUSrVkMoZtcU96uYcp-kSUcf6FhoFFGN2BiqJd0kr5nzJmhaTmTQDSMvGbcuNsVA&_nc_ohc=BzTwTl5evUcAX9DKmKy&_nc_ht=scontent.ftpa1-2.fna&oh=a3681702b57c4bbbe2994f4aa7eafd2a&oe=5EEF370B'
    }
  ], (err, data)=>{
        res.redirect('/shops');
    })
});

// Show:
shops.get('/:id', /* isAuthenticated,*/ (req, res) => {
  Shops.findById(req.params.id, (err, foundShop) => {
    res.render('shops/show.ejs', {
      shop: foundShop
      // ,currentUser: req.session.currentUser
    })
  })
})

// Edit:
shops.get('/:id/edit', /* isAuthenticated, */ (req, res) => {
  Shops.findById(req.params.id, (err, foundShop) => {
    res.render('shops/edit.ejs', {
      log: foundShop
      // ,currentUser: req.session.currentUser
    })
  })
})

/*
***************************
  Functional Routes
***************************
*/

// Create:
shops.post('/', /* isAuthenticated,*/ (req, res) => {
  // if (req.body.shipIsBroken === 'on') {
  //   req.body.shipIsBroken = true;
  // } else {
  //   req.body.shipIsBroken = false;
  // }
  Shops.create(req.body, (error, createdshop) => {
    res.redirect('/shops');
  });
});

// Update
shops.put('/:id', /* isAuthenticated,*/ (req, res) => {
  // if (req.body.shipIsBroken === 'on') {
  //   req.body.shipIsBroken = true
  // } else {
  //   req.body.shipIsBroken = false
  // }
  Shops.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedshop) => {
      res.redirect(`/shops`)
    }
  )
})

// Delete
shops.delete('/:id', /* isAuthenticated, */ (req, res) => {
  Shops.findByIdAndRemove(req.params.id, (err, deletedshop)=>{
        res.redirect('/shops');
      })
})

module.exports = shops
