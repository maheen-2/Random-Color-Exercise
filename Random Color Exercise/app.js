const button = document.querySelector("#btn");
const text = document.querySelector("h1");
button.addEventListener("click", function () {
    //we are going to make random color by using rgb( , ,)
    //We're using 256 instead of 255 since we gonna floor the number and only if we do it by *256, then we can get numbers till 255.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const changingColor = `rgb(${r}, ${g}, ${b})`;
    //In JS, everything is camelcased. Even if we some properties hev dashes between them or so...
    document.body.style.backgroundColor = changingColor;
    text.innerText = changingColor;
    //By this last bonus step, you can change color of the text to white whenever background color becomes too dark.
    if (r < 150 && g < 150 && b < 150) {
        text.style.color = "white";
    }
    else {
        text.style.color = "black";
    }

})


//OR A LITTLE SHORTER WAY TO DO THAT
//const randColor = () => {
   // const r = Math.floor(Math.random() * 256);
    //const g = Math.floor(Math.random() * 256);
    //const b = Math.floor(Math.random() * 256);
    //return `rgb(${r}, ${g}, ${b})`;
//})