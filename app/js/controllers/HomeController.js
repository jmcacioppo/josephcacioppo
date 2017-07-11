'use strict';

josephcacioppo.controller('HomeController',
    function($scope) {
        $(".nav li").on("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
    }
);
