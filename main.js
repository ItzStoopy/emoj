Webcam.set({

    width:350,
    height:300,
    image_format : 'png',
    png_quality:1080
    
    });
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot()
    {

Webcam.snap (function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

});}

console.log('ml5 verisonn;', ml5.verison);
classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sINyRhE7B/model.json', modelLoaded)

function modelLoaded(){

console.log ('Model Loaded!');

}

function speak (){

var synth= window.speechSynthesis;
speak_data_1="The first prediction is" + prediction_1;
speak_data_2="The second prediction is" + prediction_2;
var utterThis = new SpeechSynthesisUtterance (speak_data_1 +speak_data_2 );
synth.speak(utterThis);
}

function check()
{

img = document.getElementById ('captured_image');
classifer.classify(img, gotResult);

}

function gotResult(error, results) {

if (error) {
console.error(error);
}
else {
console.log (results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[0].label;
prediction_1 = results[0].label;
prediction_2 = results[0].label;
speak();
if (results[0].label == "happy")
{
    document.getElementById("update_emoji").innerHTML= "&#128522;";
}
if (results[0].label == "emo")
{
    document.getElementById("update_emoji").innerHTML= "&#128532;";
}
if (results[0].label == "pomeranian")
{
    document.getElementById("update_emoji").innerHTML= "&#12548;";
}
if (results[1].label == "happy")
{
    document.getElementById("update_emoji").innerHTML= "&#128522;";
}
if (results[1].label == "emo")
{
    document.getElementById("update_emoji").innerHTML= "&#128532;";
}
if (results[1].label == "pomeranian")
{
    document.getElementById("update_emoji").innerHTML= "&#12548;";
}

}}