let serverUrl = "http://188.166.18.216/api/v1/";

let appToken = (fbToken) => {
  return new Promise((resp, fail) => {
    fetch(`${serverUrl}token_auth/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "post",
      body: JSON.stringify({access_token: fbToken})
    })
      .then(function (response) {
        resp(response.json());
      });
  });
};

export {appToken}