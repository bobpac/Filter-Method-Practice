const cars = [
    { make: 'Toyota', yrsOld: 5, mileage: 92399 },
    { make: 'Ford', yrsOld: 12, mileage: 255005 },
    { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
    { make: 'Subaru', yrsOld: 9, mileage: 111266 },
    { make: 'Toyota', yrsOld: 2, mileage: 41888 },
    { make: 'Tesla', yrsOld: 3, mileage: 57720 }
  ];

  /* Filter the cars array */
  wellDrivenCars = cars.filter(function(value) {
    if ( value.mileage > 20000 ) { return value; }
  })

  /* Print out wellDrivenCars array using function arrow */
  wellDrivenCars.forEach(element  => {
    // how can I access idx ????
    console.log(`*********************** Use function arrow  ***********************`);
    console.log(`Make: ${element.make}`)
    console.log(`YrsOld: ${element.yrsOld}`)
    console.log(`Mileage: ${element.mileage}`)
    console.log(""); // blank line
  });

/* Use foreach simply using a function */
wellDrivenCars.forEach(printOutNewArray);
  
function printOutNewArray (element, idx) 
{
  console.log(`*********************** Use function idx = ${idx} ***********************`);
  console.log(`Make: ${element.make}`)
  console.log(`YrsOld: ${element.yrsOld}`)
  console.log(`Mileage: ${element.mileage}`)
  console.log(""); // blank line
};