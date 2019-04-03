Storage.prototype.setArray = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getArray = function(key) {
    return JSON.parse(this.getItem(key));
};
Storage.prototype.deleteArray = function(key) {
    return this.removeItem(key);
};


var model = {

    storeInArray: function(objTime) {        

        
        if (!window.localStorage["cachedTimes"]) {   

            var newArray = new Array(); 
            newArray[0] = objTime;

            window.localStorage.setArray("cachedTimes", newArray);            
            
        }   
        
        else {           


            var longLocalStorage = window.localStorage.getArray("cachedTimes").length;
            var array = new Array();            
            
            for(var j=0; j <longLocalStorage; j++){

                array[j] = window.localStorage.getArray("cachedTimes")[j];
                
            }   

            array.push(objTime) ;
            
            window.localStorage.deleteArray("cachedTimes");

            window.localStorage.setArray("cachedTimes",array);         


        }

    },
    
    emptyArray: function() {

        window.localStorage.deleteArray("cachedTimes");

    },

    retrieveArray: function(){
        var arrayAux = new Array(); 

        if (window.localStorage["cachedTimes"]) {             

            arrayAux = window.localStorage.getArray("cachedTimes");
        }

        return arrayAux;
    }
};