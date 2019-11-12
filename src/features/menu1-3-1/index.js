import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

const MODULE_NAME = 'app.menu1-1-3';

export default angular.module(MODULE_NAME, [uirouter])
  .config(routing)
  .name;
