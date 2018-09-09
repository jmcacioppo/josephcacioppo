josephcacioppo.controller('InitializationController', function ($scope, Util) {
  let footer = '';
  let headerBackground = '';
  let headerTitle = '';

  setTimeout(() => {
    footer = document.getElementById('footer');
    headerBackground = document.getElementById('headerBackground');
    headerTitle = document.getElementById('headerTitle');

    headerBackground.classList.remove('hideDuringLoad');
    footer.classList.remove('hideDuringLoad');
    
    configureWindowSize();
    setResize();
  }, 0);

  function configureWindowSize() {
    headerBackground.style.height = `${window.innerHeight}px`;
    headerTitle.style.marginTop = `${window.innerHeight * .20}px`;
  }

  function setResize() {
    var resizeWindow = Util.debounce(function () {
      headerBackground.style.height = `${window.innerHeight}px`;
      headerTitle.style.marginTop = `${window.innerHeight * .20}px`;
    }, 20);

    window.addEventListener("resize", resizeWindow);
  }
});
