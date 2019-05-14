function Duck(name, color){
    this.name = name;
    this.color = color;

    this.Speak = function(){
        // console.log('speak quak quak');
        console.log(this.name + ' have '+ this.color + ' speak quak quak');
    }
};

var donnal = new Duck('Donnal', 'yealow');
var duckduck = new Duck('Duckduck', 'black');

donnal.Speak();
duckduck.Speak();