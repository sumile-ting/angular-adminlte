export default class HomeController {
  constructor(randomName){
    this.random = randomName;
    this.name = 'World';
  }
  changeName() {
    this.name = 'sumile';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames'];
