angular.module('testApp')
  .directive('grid', function () {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var xStep, yStep;
      var drawGrid = function (width, height) {
        var canvas = element[0],
          context = canvas.getContext('2d');
        xStep = canvas.width / width;
        yStep = canvas.height / height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "#ddd";
        context.beginPath();
        for (y = 0; y <= canvas.height; y += yStep) {
          context.moveTo(0, y);
          context.lineTo(canvas.width, y);
        }
        context.stroke();
        context.beginPath();
        for (x = 0; x <= canvas.width; x += xStep) {
          context.moveTo(x, 0);
          context.lineTo(x, canvas.height);
        }
        context.stroke();
      };
      scope.grid = {
        drawCell: function(y, x) {
          var canvas = element[0],
            context = canvas.getContext('2d');
          context.fillStyle = '#000';
          context.fillRect(x * xStep + 1, y * yStep + 1, xStep - 1, yStep - 1);
        }
      };
      var pair = attrs.grid.split(',');
      drawGrid(pair[0], pair[1]);
    }
  };
});