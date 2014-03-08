var mongoose = require( 'mongoose' );
//Imports the models
var Offer = mongoose.model( 'Offer' );

//Controller Actions

exports.splash = function (req, res){
  res.render("../views/index.jade",{
    title:"Dine With DineX"
  });
};

exports.create = function ( req, res ){
  new Offer({
    username : req.body.username,
    content : req.body.offer,
    created : Date.now()
  }).save( function( err, offer, count ){
    res.redirect( '../views/newsfeed.jade' );
  });
};

exports.newsfeed = function ( req, res ){
  Offer.find( function ( err, offers, count ){
    res.render( '../views/newsfeed.jade', {
        title : 'Dine With DineX',
        offers : offers
    });
  });
}; 