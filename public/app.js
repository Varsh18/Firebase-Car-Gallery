document.addEventListener("DOMContentLoaded",event=>{
  const app=firebase.app();
  const db=firebase.firestore();
  firebase.firestore().settings( { timestampsInSnapshots: true })
  const header=db.collection('Header');
  header.get()
  .then(product => {
    document.write(`<table>`);
    product.forEach(doc => {
      data=doc.data();
      document.write(`<tr><td>${data.Model}</td> <td>${data.MPG}</td><td>${data.Cylinders}</td> <td>${data.Displacement}</td><td>${data.Horsepower}</td> <td>${data.Weight}</td><td>${data.Acceleration}</td> <td>${data.Year}</td><td>${data.Origin}</td> </tr>`);
      })
        })
   const carRef=db.collection('cars');
  const query=carRef.orderBy('Model','asc')
  query.get()
        .then(product => {
             product.forEach(doc => {
                data=doc.data();
                document.write(`<tr><td>${data.Model}</td> <td>${data.MPG}</td><td>${data.Cylinder}</td> <td>${data.Displacement}</td><td>${data.Horsepower}</td> <td>${data.Weight}</td><td>${data.Acceleration}</td> <td>${data.Year}</td><td>${data.Origin}</td> </tr>`);
             })
            document.write(`</table>`);
        })
});
