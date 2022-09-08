//Este codigo nos permite convertir voz en texto
var SpeechRecognition = window.webkitSpeechRecognition; // 1 -- esta api de web speech se utiliza para convertir lo que escucha en texto pero primero se crea la variable para poder almacenar todo en el api
  
var recognition = new SpeechRecognition(); //1 --se crea un nuevo archivo de wenspecj para usarlo y se almacena en vafiable var crea variable para almacenar new crea una nueva speechrecognition en el api de web speech para reconocimiento de voz en texto

//1-- se define funcion de star se limpia el area de texto cuando lo presionamos
function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); // se llama la funcion del web speecj que es el api de la voz
} 
 
//1-- se llama a la funcion onresult que contiene tiodos los valores de la voz convertida en texto
recognition.onresult = function(event) { //1--- recognition sirve para obtener los textos obtenidos

 console.log(event); //1- en consola se muestra lo que tiene

var Content = event.results[0][0].transcript; // 1--aqui tenemos dos ceros por que en la primera seccion donde dimos clicj result aparece como 0 igual que en la imagen al principio hasta que son llenadas.

    document.getElementById("textbox").innerHTML = Content; // 1-- ahora actualizamos el valor del texto con el nuevo 
// -********************************* HASTA  AQUI ES LA CLASE 1 -**********************************
    console.log(Content);
      if(Content =="Toma mi selfie") //}3- verificar si el texto esta bien puesto que la primera es mayuscula
      {
        console.log("tomando selfie --- ");
        speak();
      }
}

// 2 --  se define la funcion
function speak(){ //2-- tomamos el valor para que la lo que esta dentro pueda ponerse en la variable
    var synth = window.speechSynthesis;

    speak_data = "Tomando tu selfie en 5 segundos"; // 2--- se toma lo guardado en el textobox

    var utterThis = new SpeechSynthesisUtterance(speak_data); //3--- se convierte a voz

    synth.speak(utterThis);//2- se convierte y almacena synt almace en api speak funcion definida utterthis convierte el valor para que el sistema lo reproducca
    //2-- el proposito de speak es hacer automatico el reporudcir voz
    
    Webcam.attach(camera); //2--- ára activar la camara el codigo es este

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera"); // 2 --- se muestra la vista de la camara y almacenamos en variable en index esta fefinido camera un div
// 2-- esta es la config de la camara.
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

//3- se define gfuncionede webcam.js webcam.snap es funcion para tomar selfie
function take_snapshot()
{
    Webcam.snap(function(data_uri) { //esto nos permite visualizar imagen
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; // se actiañoza eñ div con la selfie div de resultado
    });
}

//te permite preguntar donde guardarla y le da extensin
function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}