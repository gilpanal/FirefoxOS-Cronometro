var t = undefined;

var controller = {  

    init:function(){

        if(t === undefined){

            localStorage.c='0.0'; 
            controller.counterDisplay();
            view.clearList();
            
        }      

    },
    onload : function() {

        localStorage.c = (localStorage.c || '0.0');    
    
        controller.counterDisplay();
    
        view.showList(model.retrieveArray());
    
    },
    incr: function ()     { 

        localStorage.c = +localStorage.c + 0.1; 
    },

    counterDisplay: function()  { 

        cl.innerHTML = (+localStorage.c).toFixed(1);
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
    },
    startButtonHandler: function(){

        controller.startStop();

    },
    resetButtonHandler: function(){
        if(t === undefined){
            controller.init();
            model.emptyArray(); 
            
        }
    }


};

