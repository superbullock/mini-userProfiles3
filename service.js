var app = angular.module('userProfiles');

app.service('mainService', function ($http, $q) {

  var deffered = $q.defer();

  this.getUsers = function () {
    $http({
      method: 'GET',
      url: 'http://reqr.es/api/users?page=1'
    }).then(function (response) {
      response = response.data.data;
      //      for (var i = 0; i < response.length; i++) {
      //        response[i].first_name = 'Ralf';
      //      };
      response.forEach(function (user, index) {
        user.first_name = 'Ralf';
      });
      deffered.resolve(response);
    });
    return deffered.promise;
  }
});