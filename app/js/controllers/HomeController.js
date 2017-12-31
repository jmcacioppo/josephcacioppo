'use strict';

josephcacioppo.controller('HomeController',
    function($scope) {
        $scope.phone = "(305) 794-7034";

        $(".nav li").on("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
    }
);
