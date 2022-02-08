const CognitoExpress = require('cognito-express')

const cognitoExpress = new cognitoExpress({
    reqion: process.env.AWS_DEFAULT_REGION,
    cognotoUserPoolId: process.env.COGNITO_USER_POOL_ID,
    tokenUse: "access",
    tokenExpiration: 3600
})

exports.validateAuth = (req, res, next) => {
    if(req.headers.auyhorization && req.headers.authorization.split(' ')[0] === "bearer") {
      const token = req.headers.authorization.split(' ')[1]
      cognitoExpress.validate(token, (err) => {
        if(err){
          res.status(401).send();
        } else {
          next();
        }
      })
    } else {
      res.status(401).send();
    }
}