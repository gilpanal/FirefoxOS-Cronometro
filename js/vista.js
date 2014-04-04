var cl = $("#crono");

$(function(){


    $("#cambiar").on('click', function(){

       if(t === undefined){

        $("#cambiar").text("stop ");
        }
        else{
            $("#cambiar").text("start");
        }
        controlador.cambiar();

    });

    $("#inicializar").on('click', function(){ 

        if(t === undefined){

            controlador.init();
            
        }


    });

    $("#resetear").on('click', function(){ 

        if(t === undefined){
            controlador.init();
            modelo.vaciarArray(); 
            
        }


    });

});




var vista = {

    pintarElemLista: function(elem){

        $("#items").append('<br>'+elem+' segundos' );       

    },

    pintarListaEntera: function(arrayList){

        var listado = "";

        if (arrayList && arrayList.length > 0) {  
            for ( var i = 0; i < arrayList.length; i++) {

                listado += "<br>"+arrayList[i]+" segundos" ;
            }
        }

        $("#items").html(listado);

    },

    borrarLista: function(){
        $("#items").empty();
    }

};



