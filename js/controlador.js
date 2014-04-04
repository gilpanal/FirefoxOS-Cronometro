var t = undefined;

$(function(){

    localStorage.c = (localStorage.c || "0.0");    

    controlador.mostrar();

    vista.pintarListaEntera(modelo.devolverArray());

});

var controlador = {  

    init:function(){

        if(t === undefined){

            localStorage.c="0.0"; 
            controlador.mostrar();
            vista.borrarLista();
            
        }      

    },
    incr: function ()     { 

        localStorage.c = +localStorage.c + 0.1; 
    },

    mostrar: function()  { 

        cl.html((+localStorage.c).toFixed(1)); 
    },

    arrancar: function() { 
        t = setInterval(function(){
         controlador.incr(); 
         controlador.mostrar();
     }, 100);

    },

    parar: function() { 

        clearInterval(t);         

        vista.pintarElemLista((+localStorage.c).toFixed(1));
        modelo.guardarEnArray((+localStorage.c).toFixed(1));

        t = undefined; 
    },

    cambiar: function() { 

        if (!t) {
            controlador.arrancar(); 
        }
        else {
            controlador.parar(); 
        }
    }

};

