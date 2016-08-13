angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.agregarSalario', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/agregarSalario.html',
        controller: 'agregarSalarioCtrl'
      }
    }
  })

  .state('tabsController.pagoDeServiciosEducativos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/pagoDeServiciosEducativos.html',
        controller: 'pagoDeServiciosEducativosCtrl'
      }
    }
  })

  .state('tabsController.generarISR', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/generarISR.html',
        controller: 'generarISRCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.deduccionesPersonales', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/deduccionesPersonales.html',
        controller: 'deduccionesPersonalesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});