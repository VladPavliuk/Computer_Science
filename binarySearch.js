var binarySearch = (arr, find) => {
	if (arr.length === 0)
  	return false;
    
  if (arr.length === 1)
  	return arr[0] === find ? 0 : false;
    
  var middle = Math.floor(arr.length / 2) - 1;

  if (arr[middle] === find)
  	return middle;
 
   if (arr[middle] < find) {
    var innerCall = binarySearch(arr.slice(middle + 1), find);
    innerCall = innerCall >= 0 ? innerCall : false;
    return innerCall === false ? false : Math.floor(arr.length / 2) + innerCall;
  }
    
  return binarySearch(arr.slice(0, middle + 1), find);
};

var arr = [3, 4, 8, 9, 45, 54]; 

console.log( binarySearch(arr, 45));
arr = [];

for (var i = 1; i <= 100; i++)
  arr.push(i); 
  
for (var i = 1; i <= 100; i++)
	console.log(i - 1 === binarySearch(arr, i))
