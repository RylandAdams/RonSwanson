import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { RonSwan } from './services/ron-Swanson.js';

$("#ronQuote").submit(function (event) {
  event.preventDefault();
  $(".output").html('');
  let ron = new RonSwan;
  RonSwan.getQuote()
    .then(function (response) {
      $(".output").append(`<h1>${response}</h1>`);
      let wordResponse = ron.checkWord(response[0]);
      RonSwan.getSearchGif(wordResponse)
        .then(function (searchResponse) {
          console.log(searchResponse);
          $('.output').append(`<a href='${searchResponse.PromiseResult.data[0].url}'><img src=${searchResponse.PromiseResult.data[0].url} id='gif${searchResponse.PromiseResult.data[0].title}'></a>`);
        });
    });
  RonSwan.getGif()
    .then(function (gifResponse) {
      console.log(gifResponse);
      $('.output').append(`<a href='${gifResponse.data.url}'><img src=${gifResponse.data.images.original.url} id='gif${gifResponse.data.title}'></a>`);
    });
  $('.output').fadeIn();
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
