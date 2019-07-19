import ChuckClient from 'chucknorris-io';

class ChuckService {
  constructor() {
    this.client = new ChuckClient();
  }

  getRandomJoke() {
    return this.client.getRandomJoke()
  }
}

const chuckService = new ChuckService();

export { chuckService as ChuckService }