josephcacioppo.controller('HomeController',
    function($scope, Util) {
        let headerBackground = document.getElementById('headerBackground');
        let homeTitle = document.getElementById('hometitle');
        headerBackground.style.height = `${window.innerHeight}px`;
        headerBackground.style.width = `${window.innerWidth}px`;
        homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
        
        window.addEventListener("resize", Util.debounce(function (event) {
            headerBackground.style.height = `${window.innerHeight}px`;
            headerBackground.style.width = `${window.innerWidth}px`;
            homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
            console.log('yo');
        }), 10000);
        
        $scope.phone = "(305) 794-7034";

        $(".nav li").on("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
    }
);
