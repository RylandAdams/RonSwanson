export class RonSwan {
  static async getQuote() {
    return fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error){
        return Error(error);
      });
  }
  
  static async getGif() {
    return fetch(`http://api.giphy.com/v1/gifs/random?tag="ron swanson"&api_key=dDoXTOSV188zGNcFEVZCNTfU5W9eDVcU`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error){
        return Error(error);
      });
  }
}

  
