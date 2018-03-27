
//all the functions in the export brackets will be available to use in our main file
module.exports = {

    thunderfury: {
        //the trigger phrases for wow commands
        triggers: ['thunderfury'],

        //On Trigger: Deletes the message than mentioned "thunderfury" and sasses them back
        command: function(msg){
            msg.delete();
            msg.channel.send('shhh');
        }
    }

}