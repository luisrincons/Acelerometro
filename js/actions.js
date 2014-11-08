//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn= {
    device: function(){
        Document.addEventListener('deviceready', fn.init, false);
    },
    init : function (){
        //Botón iniciar acelerometro.
        //$('#acelerometro .individual li').tap(ace.start);
        $('#acelerometro .individual li').eq(0).tap(ace.start);
        //Botón detener acelerometro.
        $('#acelerometro .individual li').eq(1).tap(ace.stop);
    }
};

var ace = {
    start: function(){
        if(ace.watchID == null)
            ace.watchID = navigator.accelerometer.watchAcceleration(ace.sucess, ace.error, {frecuency:800});
    },
    stop: function(){
        if(ace.watchID){
            navigator.accelerometer.clearWatch(ace.watchID);
            ace.watchID = null;
        }
    },
    watchID: null,
    sucess: function(a) { 
        var text = 'X:<b>' + a.x + '</b><br>' + 
                   'Y:<b>' + a.y + '</b><br>' +
                   'Z:<b>' + a.z + '</b><br>';
        $('#acelerometro h2').html(text);
    },
    error: function(){
        alert('Error  en el acelerómetro.');
    }

};

$(fn.device);