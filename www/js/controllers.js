angular.module('app.controllers', [])

.controller('calculadoraCtrl', ['$scope', '$stateParams', '$ionicPopup', function ($scope, $stateParams, $ionicPopup) {

    $scope.resultado = '';

    $scope.cliqueBotao = function(valorBotao){
        if(valorBotao === 'C') {
            $scope.resultado = '';
        } else if (valorBotao === '=') {
            if($scope.resultado === '') {
                return;
            }

            try {
              $scope.resultado = eval($scope.resultado);
            } catch(err){
                $ionicPopup.alert({
                    title: 'Expressão incorreta',
                    template: "Ooops, tente novamente..."
                });

                $scope.resultado = '';
            }

        } else {
            $scope.resultado += valorBotao;
        }
    };

}])
