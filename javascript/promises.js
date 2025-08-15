function setTimeoutPromisified(reject) {
  return new Promise(resolve => setTimeout(resolve, reject));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);