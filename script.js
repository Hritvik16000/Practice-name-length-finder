let button = document.getElementById('btn');
button.addEventListener("click", function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    //console.log(word);
    let outDivision = document.getElementById("output");
    outDivision.innerHTML = `<h1>${count}</h1>`;
});