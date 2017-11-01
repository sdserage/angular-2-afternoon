angular.module('devmtnTravel').service('mainSrvc', function($http) {
  this.getTravelInfo = () => {
    return {
      method: 'GET',
      url: "https://practiceapi.devmountain.com/api/travel/travel-info"
    }
  };
  this.getPackageInfo = () => {
    return {
      method: 'GET',
      url: "https://practiceapi.devmountain.com/api/travel/package-info"
    }
  };
});
