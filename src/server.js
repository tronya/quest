const helmet = require("helmet");

server.use(router)
app.use(helmet.hsts({
  maxAge: 31536000
}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

  next()
})
app.use(helmet.noCache())
app.use(helmet.frameguard())
app.use(helmet.nosniff());
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

app.use(helmet.cors({
  allowOrigin: 'http://188.166.18.21',
  allowCredentials: 'BASIC',
  exposeHeaders: 'WWW-Authenticate',
  maxAge: '86400',
  allowMethods: 'POST, PUT',
  allowHeaders: 'Authorization, Referer',
  requestMethod: 'OPTIONS',
  requestHeaders: ''
}));

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'http://188.166.18.216', "188.166.18.21", "http://localhost:9000"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "http://188.166.18.216", "http://localhost:9000"],
    scriptSrc: ["'self'", "'unsafe-inline'", "http://188.166.18.216", "http://localhost:9000"]
  }
}));

server.listen(3008, () => {
  console.log('JSON Server is running')
})