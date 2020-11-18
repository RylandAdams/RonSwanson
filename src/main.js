import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RonSwan from './services/ron-Swanson.js';

$("#ronQuote").submit(function(event) {
  event.preventDefault();
  RonSwan.getQuote()
  .then(function(response) {
    $("#quoteReturn").text(response);
  });
});

// DinoIpsum.getIpsum()
// .then(function(dinoResponse) {
//   if (dinoResponse instanceof Error) {
//     throw Error(`Dino API error: ${dinoResponse.message}`);
//   }
//   const dinoWord = dinoResponse.toString().toLowerCase().split("");
//   for(let i = 0; i <= dinoWord.length - 1; i++) {
//     dinoArray.push(dinoWord[i]);
//   }
//   console.log(dinoArray);
//   displayDinoWord(dinoArray);
//   return DinoIpsum.getIpsum(dinoArray);
// })
// .catch(function(error) {
//   displayErrors(error.message);
// });
