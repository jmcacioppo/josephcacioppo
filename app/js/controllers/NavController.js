'use strict'

josephcacioppo.controller('NavController', 
    function($scope, $location) {
        $scope.navOptions = [{
            link : "#!/",
            title : 'Home',
            active: false
        }, 
        {
            link : "#!/aboutme",
            title : 'About Me',
            active: false
        },
        {
            link : "#!/projects",
            title : 'Projects',
            active: false
        },
        {
            link : "#!/resume",
            title : 'Resume',
            active: false
        }];
        
        $scope.isActive = function (viewLocation) {
            var sameLocation = viewLocation === '#!' + $location.path();
            console.log(sameLocation);
            return sameLocation;
        };

        $scope.checkActive = function (option) {
            option.active = true;
            console.log(option);
        };
    });