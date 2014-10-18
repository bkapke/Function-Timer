$(document).ready(function(){
    /**
     * Loop through three identical arrays using a different approaches, see how performance varies
     */
    var arr = [];
        j = 10000000;
        
    //populate the arrays
    
    for(var i = 0; i <= j; i++) {
        arr.push(i);
    }
    
    Application.timer.start("for loop", true, true);
    
        for(var i = 0; i < arr.length; i++) {
            //do something;
            var val = arr[i];
        }
        
    Application.timer.stop();   

    Application.timer.start("while loop", true, true);
        var j = arr.length
        
        while(j >= 0, j--) {
            //do something;
            var val = arr[j];
        }
    Application.timer.stop();

    Application.timer.start("$.each() jQuery loop", true, true);
    
        var jj = arr.length;
        
        $.each(arr, function(id, val){
            jj--
        });
        
    Application.timer.stop();
    
});