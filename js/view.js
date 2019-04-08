var cl = document.getElementById('crono');

window.onload = function() {

    document.getElementById('start_button').addEventListener('click', controller.startButtonHandler); 

    document.getElementById('init_button').addEventListener('click', controller.init);

    document.getElementById('reset_button').addEventListener('click', controller.resetButtonHandler);
   
    controller.onload();    
};

var view = {

    changeButtonText:function(){

        if(t === undefined){
            document.getElementById('start_button').textContent = 'stop ';           
        }
        else{
            document.getElementById('start_button').textContent = 'start';           
        }

    },
    addListItem: function(elem){

        var node = document.createElement('span');  
        var textnode = document.createTextNode(elem +  ' seconds');  
        node.appendChild(document.createElement('br'));       
        node.appendChild(textnode);          
        document.getElementById('items').appendChild(node);       
    },

    showList: function(arrayList){

        var listItems = "";

        if (arrayList && arrayList.length > 0) {  
            for ( var i = 0; i < arrayList.length; i++) {

                listItems += "<br>"+arrayList[i]+" seconds" ;
            }
        }
        document.getElementById('items').innerHTML = listItems;

    },

    clearList: function(){
        
        document.getElementById('items').innerHTML = '';
        
    }

};

