document.addEventListener("DOMContentLoaded",event=>{
  const app=firebase.app();
  const db=firebase.firestore();
  firebase.firestore().settings( { timestampsInSnapshots: true })
   const carRef=db.collection('cars');
  const query=carRef.orderBy('Model','asc')
  query.get()
        .then(product => {

        })
});
