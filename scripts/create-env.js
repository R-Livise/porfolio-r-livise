const fs = require('fs')

fs.writeFileSync('./.env',`
FIREBASE_API_KEY= ${ process.env.FIREBASE_API_KEY}\n
FIREBASE_AUTH_DOMAIN= ${ process.env.FIREBASE_AUTH_DOMAIN}\n
FIREBASE_PROJECT_ID= ${ process.env.FIREBASE_PROJECT_ID}\n
FIREBASE_STORAGE_BUCKET= ${ process.env.FIREBASE_STORAGE_BUCKET}\n
FIREBASE_MESSAGING_SENDER_ID= ${ process.env.FIREBASE_MESSAGING_SENDER_ID}\n
FIREBASE_APP_ID= ${ process.env.FIREBASE_APP_ID}\n
FIREBASE_MEASUREMENT_ID= ${ process.env.FIREBASE_MEASUREMENT_ID}\n
`)