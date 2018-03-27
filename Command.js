class Command{
    constructor(triggers, command){
        this.triggers = triggers;
        this.command = command;
    }

    checkTriggers(message){
        var msg = message.content.toLowerCase();
        for(var i = 0; i < this.triggers.length; i++){
            if(msg.includes(this.triggers[i])){
                this.command(message);
                return true;
            }
            
        }
        return false;
    }
}

module.exports = Command;