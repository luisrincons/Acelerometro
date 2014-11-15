//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
    device: function(){
        document.addEventListener('deviceready', fn.init, false);
    },
    init: function(){
        //Iniciar Acelerómetro
        $('#acelerometro .individual li').eq(0).tap(alert('iniciar'));
        //Detener Acelerómetro
        $('#acelerometro .individual li').eq(1).tap(alert('detener'));
        
    }
};

var ace = {
    start: function(){
        if(ace.watchID == null)
            ace.watchID = navigator.accelerometer.watchAcceleration(ace.success, ace.error, {frequency:800});
    },
    stop: function(){
        if(ace.watchID){
            navigator.accelerometer.clearWatch(ace.watchID);
            ace.watchID = null;
        }
    },
    watchID: null,
    success: function(a){
        var text = 'X: <b>'+a.x+'</b><br>'+
                   'Y: <b>'+a.y+'</b><br>'+
                   'Z: <b>'+a.z+'</b><br>';
        $('#acelerometro h2').html(text);
    },
    error: function(){
        alert('Error en el Acelerómetro');
    }
};

$(fn.device);