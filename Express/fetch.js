// hitting backend server - using fetch
async function main() {
    const response= await fetch("https://www.postb.in/1755456154544-2448703923728?hello=world")
    const json =await response.json();
    console.log(json.length);
}
main();