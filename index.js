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

    var plants = [
        ':cherry_blossom:',
        ':tulip:',
        ':four_leaf_clover:',
        ':rose:',
        ':sunflower:',
        ':hibiscus:',
        ':maple_leaf:',
        ':leaves:',
        ':fallen_leaf:',
        ':herb:',
        ':mushroom:',
        ':cactus:',
        ':palm_tree:',
        ':evergreen_tree:',
        ':deciduous_tree:',
        ':chestnut:',
        ':seedling:',
        ':blossom:'
    ];
    
    var space = [
     '',
     ' ',
     '     ',
     '        ',
     '  ',
     '      ',
     '              ',
     '           '
    ];

    var result = '';

    var plant1 = emoji.get(plants[randPlant()]);
    var plant2 = emoji.get(plants[randPlant()]);
    var plant3 = emoji.get(plants[randPlant()]);

    var animal1 = emoji.get(array[randAnimal()]);
    var animal2 = emoji.get(array[randAnimal()]);
    var animal3 = emoji.get(array[randAnimal()]);

    result += animal1 + space[randSpaces()] + animal2 + space[randSpaces()] + animal3;   

    result += '\n\n\n\n';
    
    result += space[randSpaces()] + plant1 + space[randSpaces()] + plant3 + space[randSpaces()] + plant2; 
    
    return result;
}

function randAnimal(){
    return Math.floor(Math.random() * 53);
}

function randPlant() {
    return Math.floor(Math.random() * 18);
}
function randSpaces(){
    return Math.floor(Math.random() * 8);
}

setInterval(tweet, 60*60*1000);
