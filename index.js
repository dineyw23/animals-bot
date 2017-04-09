var twit = require('twit');
var emoji = require('node-emoji');

var Twitter = new twit(
   {
   consumer_key: process.env.CONSUMER_KEY,
   consumer_secret: process.env.CONSUMER_SECRET,
   access_token: process.env.ACCESS_TOKEN,
   access_token_secret: process.env.ACCESS_TOKEN_SECRET 
});

function tweet() {
   var tweet = {
      status : generateFlags()
   };
   
   Twitter.post('statuses/update', tweet, function(err,data,response){
      console.log(data);
   })
}

function generateFlags() {
      var array = [
       ':cat:',
        ':dog:',
        ':mouse:',
        ':hamster:',
        ':rabbit:',
        ':wolf:',
        ':frog:',
        ':tiger:',
        ':koala:',
        ':bear:',
        ':pig:',
        ':pig_nose:',
        ':cow:',
        ':boar:',
        ':monkey_face:',
        ':monkey:',
        ':horse:',
        ':racehorse:',
        ':camel:',
        ':sheep:',
        ':elephant:',
        ':panda_face:',
        ':snake:',
        ':bird:',
        ':baby_chick:',
        ':hatched_chick:',
        ':hatching_chick:',
        ':chicken:',
        ':penguin:',
        ':turtle:',
        ':bug:',
        ':honeybee:',
        ':ant:',
        ':beetle:',
        ':snail:',
        ':octopus:',
        ':tropical_fish:',
        ':fish:',
        ':whale:',
        ':whale2:',
        ':dolphin:',
        ':cow2:',
        ':ram:',
        ':rat:',
        ':water_buffalo:',
        ':tiger2:',
        ':rabbit2:',
        ':dragon:',
        ':goat:',
        ':rooster:',
        ':dog2:',
        ':pig2:',
        ':mouse2:',
        ':ox:',
        ':dragon_face:',
        ':blowfish:',
        ':crocodile:',
        ':dromedary_camel:',
        ':leopard:',
        ':cat2:'
        ];
 
 var temp = array[Math.floor(Math.random() * array.length)];
 var animal = emoji.get(temp);
 return animal;
}

setInterval(tweet, 60000);
