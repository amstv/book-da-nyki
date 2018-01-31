
var locale = 'en';
var url = 'http://criarapp.amstva.com';

var ngApp = angular.module('ngApp', ['ionic', 'ngResource', 'ngApp.controllers', 'ngApp.services'])

.run(function($ionicPlatform, $rootScope, $ionicLoading) {
    $rootScope.$on('loading:show', function() {
        $ionicLoading.show({
            noBackdrop: false
        });
    });

    $rootScope.$on('loading:hide', function() {
        $ionicLoading.hide();
    });

	$ionicPlatform.ready(function() {
		/* Ready */
	});
})

.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {

 $locationProvider.hashPrefix('!'); /*.html5Mode(true)*/ $ionicConfigProvider.backButton.previousTitleText(false).text(''); $httpProvider.interceptors.push(function($rootScope) { return { /* http request show loading */ request: function(config) { $rootScope.$broadcast('loading:show'); return config }, /* Hide loading in case any occurred */ requestError: function(response) { $rootScope.$broadcast('loading:hide'); return response }, /* Hide loading once got response */ response: function(response) { $rootScope.$broadcast('loading:hide'); return response }, /* Hide loading if got any response error */ responseError: function(response) { $rootScope.$broadcast('loading:hide'); return response } } }); $stateProvider .state('nav', { url: '/nav', abstract: true, templateUrl: 'nav.html', controller: 'NavCtrl' }) .state('nav.widget1', { url: '/widget/:widget/:func/:sl/:id', views: { 'mainContent': { templateUrl: function(params) { return url + '/api/v1/widget/route/' + params.widget + '/' + params.func + '/' + params.sl + '/' + params.id; } } } }) .state('nav.widget2', { url: '/widget/:widget/:func/:sl/:id/:extra', views: { 'mainContent': { templateUrl: function(params) { return url + '/api/v1/widget/route/' + params.widget + '/' + params.func + '/' + params.sl + '/' + params.id + '/' + params.extra; } } } }) .state('nav.home', { url: '/home', class: 'cHome', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=home.html', controller: 'cHomeCtrl' } } }) .state('nav.eu', { url: '/eu', class: 'cEu', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=eu.html', controller: 'cEuCtrl' } } }) .state('nav.fotos', { url: '/fotos', class: 'cFotos', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=fotos.html', controller: 'cFotosCtrl' } } }) .state('nav.conteudo', { url: '/conteudo', class: 'cConteudo', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=conteudo.html', controller: 'cConteudoCtrl' } } }) .state('nav.video', { url: '/video', class: 'cVideo', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=video.html', controller: 'cVideoCtrl' } } }) .state('nav.formulario', { url: '/formulario', class: 'cFormulario', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=formulario.html', controller: 'cFormularioCtrl' } } }) .state('nav.e-commerce', { url: '/e-commerce', class: 'cECommerce', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=e-commerce.html', controller: 'cECommerceCtrl' } } }) .state('nav.facebook', { url: '/facebook', class: 'cFacebook', cache: false, views: { 'mainContent': { templateUrl: 'templates//api/v1/mobile/view/L0K9-3M83-E288-23F1?_escaped_fragment_=facebook.html', controller: 'cFacebookCtrl' } } }); $urlRouterProvider.otherwise('/nav/home');

});

