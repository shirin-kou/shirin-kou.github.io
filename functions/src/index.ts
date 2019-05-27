import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { cert } from "./serviceAccountKey";

admin.initializeApp({
  credential: admin.credential.cert(cert as any),
  databaseURL: "https://myakushin.firebaseio.com"
});

export const userData =
  functions.https.onRequest(async (request, response) => {
    try {
      await admin.firestore().collection("user/6UyRV9E6gWeSM2tTlkWibmhNl8h2/sensor").add({
        sensor: request.body.q,
        ts: new Date().getTime()
      });
      console.log(request.body);
      response.send(true)
    }
    catch (error) {
      console.log(error)
      response.status(500).send(error)
    }
  })

  