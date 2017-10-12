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
      .then(responce => responce.json())
      .then((r) => {
          localStorage.setItem("appToken", r.token)
          resp(r.token)
        }
      );
  });
};

let tokenFromStorage = () =>{
  return localStorage.getItem("appToken");
}

export {appToken,tokenFromStorage};