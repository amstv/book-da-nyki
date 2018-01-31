
angular.module('ngApp.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
	$scope.$state = $state.current;
    $scope.params = $stateParams;
	$scope.bodyClass = '';
})

.controller('cHomeCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cHome'; }).controller('cEuCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cEu'; }).controller('cFotosCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cFotos'; }).controller('cConteudoCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cConteudo'; }).controller('cVideoCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cVideo'; }).controller('cFormularioCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cFormulario'; }).controller('cECommerceCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cECommerce'; }).controller('cFacebookCtrl', function($scope, $rootScope, $state, $stateParams) { var scope = angular.element('body').scope(); scope.bodyClass = 'cFacebook'; }).controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.showMenu = function () {
		$ionicSideMenuDelegate.toggleLeft();
	  };
	  $scope.showRightMenu = function () {
		$ionicSideMenuDelegate.toggleRight();
	  };
});

