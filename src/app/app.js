import angular from 'angular';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import '../style/app.css';

import uirouter from 'angular-ui-router';

import routing from '../app.config';
import menu from '../directives/menu-collapse-expand.directive';
import home from '../features/home/index';
import menu1_1_3 from '../features/menu1-3-1/index';
import menu1_2 from '../features/menu1-2/index';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, menu, menu1_1_3, menu1_2])
  .config(routing);

export default MODULE_NAME;
