import angular from 'angular';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../style/app.css';

import uirouter from 'angular-ui-router';

import routing from '../app.config';
import home from '../features/home/index';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home])
  .config(routing);

export default MODULE_NAME;
