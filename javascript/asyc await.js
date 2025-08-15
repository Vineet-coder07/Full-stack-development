function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hi there");
    await setTimeoutPromisified(5000);
    console.log("hello there");
    
 }
 solve();
 console.log("after sovle func")