let facebook = {

  init() {
    /* global FB */
    return new Promise((good, bad) => {
      window.fbAsyncInit = function () {
        FB.init({
          appId: '1626186040998763',
          cookie: true,  // enable cookies to allow the server to access
          // the session
          xfbml: true,  // parse social plugins on this page
          version: 'v2.10' // use version 2.1
        });

        FB.getLoginStatus(function (response) {
          if (response.authResponse) {
            good(response.authResponse.accessToken);
          }else{
            FB.login(function (response) {
              if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                window.location.reload()
              } else {
                console.log('User cancelled login or did not fully authorize.');
              }
            }, {scope: 'email'});
          }
        });
      };

      // Load the SDK asynchronously
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }).then((token, error) => {
      if (error) {
        throw new Error(error);
      }
      return token;
    });
  }
};
export {facebook};