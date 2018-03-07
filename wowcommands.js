
//all the fucnctions in the export brackets will be available to use in our main file
module.exports = {

    //On Trigger: Deletes the message than mentioned "thunderfury" and sasses them back
    thunderfury: function(msg){
        msg.delete();
        msg.channel.send('shhh');
    }
    

}