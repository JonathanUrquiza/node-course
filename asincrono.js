'use strict';


console.log('empieza');
    //escribe un texto en la consolo tras 2 segundos

    function escribeTrasDosSegundos(texto, callback) {
        setTimeout( function()  {
            console.log(texto);
            callback();
        }, 2000);
    }
   

for (let n = 0; n < 5; n++) {
    escribeTrasDosSegundos('texto', function(){
        console.log('termine ' + n);
    })
    
}
console.log('fin');