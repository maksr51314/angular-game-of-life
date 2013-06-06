angular.module('testApp')
  .controller('GameCtrl', function ($scope, $rootElement) {

    $scope.gameRules = [
      '1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.',
      '2. Any live cell with two or three live neighbours lives on to the next generation.',
      '3. Any live cell with more than three live neighbours dies, as if by overcrowding.',
      '4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'
    ];

    $scope.buttonText = 'Start';
    $scope.buttonStyle = 'btn-success';
    $scope.toggle = function() {
      if ($scope.buttonText === 'Stop') {
        $scope.buttonText = 'Start';
        $scope.buttonStyle = 'btn-success';
      } else {
        $scope.buttonText = 'Stop';
        $scope.buttonStyle = 'btn-danger';
      }
      $scope.grid.drawCell(0, 0);
      $scope.grid.drawCell(1, 1);
      $scope.grid.drawCell(2, 2);
    };
  });