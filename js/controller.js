var t = undefined;

$(function(){

    localStorage.c = (localStorage.c || "0.0");    

    controller.counterDisplay();

    view.showList(model.retrieveArray());

});

var controller = {  

    init:function(){

        if(t === undefined){

            localStorage.c="0.0"; 
            controller.counterDisplay();
            view.clearList();
            
        }      

    },
    incr: function ()     { 

        localStorage.c = +localStorage.c + 0.1; 
    },

    counterDisplay: function()  { 

        cl.html((+localStorage.c).toFixed(1)); 
    },

    start: function() { 
        t = setInterval(function(){
         controller.incr(); 
         controller.counterDisplay();
     }, 100);

    },

    stop: function() { 

        clearInterval(t);         

        view.addListItem((+localStorage.c).toFixed(1));
        model.storeInArray((+localStorage.c).toFixed(1));

        t = undefined; 
    },

    startStop: function() { 

        if (!t) {
            controller.start(); 
        }
        else {
            controller.stop(); 
        }
    }

};

