var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content; 
function start(){
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "tómame una foto"){
        console.log("tomando foto");
        speak();

    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "tomando tu foto en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id = "selfie_1";
        take_selfie();
        speak_data = "próxima foto: 5 segundos más";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        }, 5000);

        setTimeout(function(){
            img_id = "selfie_2";
            take_selfie();
            speak_data = "próxima foto: 5 segundos más";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
            }, 10000);

            setTimeout(function(){
                img_id = "selfie_3";
                take_selfie();
                }, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpg',
    jpg_quality: 90
     

});

function take_selfie(){
    console.log(img_id);
    Webcam.snap(function(data_uri) {
        if(img_id == "selfie_1"){
            document.getElementById("result1").innerHTML= '<img id="selfie_1" src="'+ data_uri +'" />';
        }
        if(img_id == "selfie_2"){
            document.getElementById("result2").innerHTML= '<img id="selfie_2" src="'+ data_uri +'" />';
        }
    
        if(img_id == "selfie_3"){
            document.getElementById("result3").innerHTML= '<img id="selfie_3" src="'+ data_uri +'" />';
        }
    });
}