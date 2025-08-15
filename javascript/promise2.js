let fetchUser = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(" User data received");
    }, 2000); // 2 seconds delay
});

fetchUser
  .then(data => console.log(data))
  .catch(err => console.log(err));
