export default class RonSwan {
  static async getQuote() {
    return fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error){
        return Error(error)
      })
  }
}