var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var takePhotoPlacas = document.getElementById('takePhotoPlacas');
        takePhotoPlacas.addEventListener('click', app.takePhotoPlacas, false);

        var takePhotoParquimetro = document.getElementById('takePhotoParquimetro');
        takePhotoParquimetro.addEventListener('click', app.takePhotoParquimetro, false);
    },
    
    takePhotoPlacas: function(){
        //navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
        //allowEdit: false, destinationType: navigator.camera.DestinationType.DATA_URL });
        navigator.camera.getPicture(onSuccess, onFail, { quality: 20, destinationType: Camera.DestinationType.FILE_URI });


        function onSuccess(imageURI){
            var imagePlacas = document.getElementById('imagePlacas');
            imagePlacas.src = imageURI;
            //image.src = "data:image/jpeg;base64," + imageURI;
            imagePlacas.style.display = 'block';
        }

        function onFail(message){
            alert('Failed because: ' + message);
        }
    },

    takePhotoParquimetro: function(){
        //navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
        //allowEdit: false, destinationType: navigator.camera.DestinationType.DATA_URL });
        navigator.camera.getPicture(onSuccess, onFail, { quality: 20, destinationType: Camera.DestinationType.FILE_URI });


        function onSuccess(imageURI){
            var imageParquimetro = document.getElementById('imageParquimetro');
            imageParquimetro.src = imageURI;
            //image.src = "data:image/jpeg;base64," + imageURI;
            imageParquimetro.style.display = 'block';
        }

        function onFail(message){
            alert('Failed because: ' + message);
        }
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
