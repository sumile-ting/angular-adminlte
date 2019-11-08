import angular from "angular";

class RandomNames {
  constructor(){
    this.names = ['angular', 'React', 'Vue', 'JQuery', 'JavaScript'];
  }
  getName() {
    var length = this.names.length;
    var randomIndex = Math.floor(Math.random() * length);
    return this.names[randomIndex];
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;
