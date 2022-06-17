//https://teachablemachine.withgoogle.com/models/PGwkGGMVb/
Webcam.set({
    height: 300,
    width: 350,
    imageformat: "png",
    pngquality: 90
})


camera=document.getElementById("camera")
Webcam.attach("#camera")

function Smile() {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML="<img src=" + data_uri +" id='isi'>"
    })
}
console.log("ml5 version:", ml5.version)
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PGwkGGMVb/model.json", modelloaded)
 function modelloaded() {
    console.log("Model Loaded!!")
 }
function Unsmile() {
    img=document.getElementById("isi")
    classifier.classify(img, gotresult)
}
function gotresult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("object").innerHTML=results[0].label
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2)
    }
}