var driver = [];

function findMatching(name) {
  drivers.filter(function(driver) {
    return driver.name === name;
  })
}