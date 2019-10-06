function findMatching(arr,name) {
return arr.filter(function(item) { return item.toUpperCase() === name.toUpperCase();});
}