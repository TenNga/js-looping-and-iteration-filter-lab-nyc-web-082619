const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(name) {
  drivers.filter(function(driver) {
    return driver === name;
  })
}