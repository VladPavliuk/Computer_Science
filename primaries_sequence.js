var primariesList = [];
var n = 100;

for (var i = 2; i <= n; i++) {
	var isPrimary = true;
  
	for (var j = 0; j < primariesList.length; j++) {
	  	if ((i % primariesList[j]) === 0) {
	    	isPrimary = false;
	  	}
	}
  
	if (isPrimary) {
		primariesList.push(i);
	}
}

console.log(primariesList);