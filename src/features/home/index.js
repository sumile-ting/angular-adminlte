import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from "./home.controller";

import randomName from '../../services/randomNames.service';

import greeting from '../../directives/greeting.directive';

const MODULE_NAME = 'app.home';

export default angular.module(MODULE_NAME, [uirouter, randomName, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
