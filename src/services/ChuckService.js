import ChuckClient from 'chucknorris-io';

class ChuckService {
  constructor() {
    this.client = new ChuckClient();
  }

  getRandomJoke() {
    return this.client.getRandomJoke() //category
  }
  getNewJoke(category) {
    return this.client.getRandomJoke(category)
  }
}

const chuckService = new ChuckService();

export { chuckService as ChuckService }