var cl = $("#crono");

$(function(){

    $("#start_button").on('click', function(){

        view.changeButtonText();
        controller.startStop();

    });

    $("#init_button").on('click', controller.init);


    $('#div-img').tap(function(){ 

       view.changeButtonText();
       controller.startStop();

   });

    $('#div-img').swipe(controller.init);

    
    $("#reset_button").on('click', function(){ 

        if(t === undefined){
            controller.init();
            model.emptyArray(); 
            
        }


    });
});




var view = {

    changeButtonText:function(){

        if(t === undefined){

            $("#start_button").text("stop ");
        }
        else{
            $("#start_button").text("start");
        }

    },
    addListItem: function(elem){

        $("#items").append('<br>'+elem+' seconds' );       

    },

    showList: function(arrayList){

        var listItems = "";

        if (arrayList && arrayList.length > 0) {  
            for ( var i = 0; i < arrayList.length; i++) {

                listItems += "<br>"+arrayList[i]+" seconds" ;
            }
        }

        $("#items").html(listItems);

    },

    clearList: function(){
        $("#items").empty();
    }

};

