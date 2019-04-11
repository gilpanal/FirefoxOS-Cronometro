var cl = document.getElementById('crono');

window.onload = function() {
 
    controller.onload();    
 
    const start_button = document.getElementById('start_button');
    ReactDOM.render(e(Button, {
        onClickFunc: controller.startButtonHandler, 
        defaultText:'start', 
        altText:'stop',
        className:'button'
    }), start_button);

    const init_button = document.getElementById('init_button');
    ReactDOM.render(e(Button, {
        onClickFunc: controller.init, 
        defaultText:'init',
        className:'button buttonBlue'        
    }), init_button);

    const reset_button = document.getElementById('reset_button');
    ReactDOM.render(e(Button, {
        onClickFunc: controller.resetButtonHandler, 
        defaultText:'reset',
        className:'button buttonRed'
    }), reset_button);
};

var view = {

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

