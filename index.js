// function abc(item) {
//     console.log(item);
//     document.getElementById("heading").innerText = item.target.value;
// }

document.getElementById("data").addEventListener("input", (event) => {
    console.log(event);
    document.getElementById("heading").innerText = event.target.value;
})