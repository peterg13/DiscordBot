//import of cheerio and request
const cheerio = require('cheerio');
const request = require('request');

//all the functions in the export brackets will be available to use in our main file
module.exports = {

    //the trigger phrases for the star wars commands
    triggers: ['darth', 'plagueis', 'prequel', 'shitpost engage'],

    //On Trigger: it will scrape the top posts from prequel memes reddit.  Choose a random post (1-25).  Then post the title and picture in discord
    postPrequelMeme: function(msg){
        var url = 'https://www.reddit.com/r/PrequelMemes/top/';
        request(url, function(error, response, html){
            //loads html from the page
            const $ = cheerio.load(html);
            var links = []
            //links will contain the 25 posts from the page and their HTML
            links = $('.thing');
            var rand = Math.floor(Math.random() * 25);
            //gets the title and link from the post chosen then concats them
            var title = $(links[rand]).find('.title.may-blank').text();
            var link = $(links[rand]).attr('data-url');
            var sendString = title + '\n' + link;
            //sends it off
            msg.channel.send(sendString);
        })
    },

    //On Trigger: posts in Discord the story of Darth Plageuis
    darthPlageuis: function(msg){
        msg.channel.send("Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.");
    }
}