document.addEventListener("DOMContentLoaded", function (event) {

  // array with texts to type in typewriter
  var dataTitle = "ANTONIO MARÍN RODRÍGUEZ";
  var dataTitleText = "Ingeniero informático";


  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet

    if (i < text.length) {
      // add next character to h1
      if(i+1 ==text.length){
        document.querySelector(".header-content__title").innerHTML =
        text.substring(0, i + 1) ;
      }
      //quitar el cursor de arriba al acabar
      else{
        document.querySelector(".header-content__title").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      }
      
      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      typeWriter2(dataTitleText, 0, fnCallback );
    }
  }


  function typeWriter2(text, i, fnCallback) {
    // chekc if text isn't finished yet

    if (i < text.length) {
      // add next character to h1
      document.querySelector(".header-content__text").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter2(text, i + 1, fnCallback);
      }, 100);
    }

    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);  
      
    }
  }
  

  // start a typewriter animation for a text in the dataTitle array
  function StartTextAnimation(i, data) {
   
    // check if dataTitle[i] exists
    if (i < dataTitle.length) {

      // text exists! start typewriter animation
      typeWriter(dataTitle, 0, function () {
        
      });
    }
  }

  // start the text animation
  StartTextAnimation(0, dataTitle);
});
