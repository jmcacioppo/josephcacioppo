'use strict';

josephcacioppo.controller('HomeController',
    function($scope) {
        $scope.title = 'Home Page';

        $(".nav li").on("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
    }
);
