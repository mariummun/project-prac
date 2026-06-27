// let heading = document.querySelector("h2");
// console.dir(heading.append(" with others"));

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "hello from the other side 1";
// divs[1].innerText = "hello from the other side 2";
// divs[2].innerText = "hello from the other side 3";
//OR
// let idx = 1;
// for(div of divs){
//     div.innerText = `hello from the other side ${idx}`;
//     idx++;
// }

//GET, SET
// let para = document.querySelector("p");
// console.log(para.getAttribute("class")); //returns the attribute name of the class
// console.log(para.setAttribute("class", "paragraph-tag")); //changes class = "para" -> class = "paragraph-tag" 
// (to view it, check elements option in website)

//STYLING
// let div = document.querySelector(".box");
// div.style.backgroundColor = "purple";
// div.innerText = "This is the updated text";

//INSERT AND REMOVE => FIRST CREATE A NODE AND THEN ADD(FOR INSERTION)
// let newButton = document.createElement("button");
// newButton.innerText = "click me!";
// console.log(newButton);

// let div = document.querySelector("div");
// div.append(newButton);
//MORE PRACTICE 
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>updation</i>";
//
// let div = document.querySelector("div");
// div.before(newHeading);
//
// document.querySelector("body").before(newHeading);

//PRACTICE1 (DOM PT2)
// let newButton = document.createElement("button");
// newButton.innerText = "click me!";

// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";

//PRACTICE2 => classList.add() & classList.remove()
// document.querySelector("body").prepend(newButton);

// let paragraph = document.querySelector("p");
// paragraph.classList.add("para2"); //adds another class inside the element

//Event Object
// let btn = document.querySelector("#btn");

// btn.onclick = evt =>{
//     console.log(evt);
// }

// btn.addEventListener("click", (evt) => {
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// })
//PRACTICE
let mode = document.querySelector("#btn");
let currMode = "light";
let body = document.querySelector("body");

btn.addEventListener("click", (evt)=>{
    if(currMode == "light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
    } else{
        currMode = "light";
        body.style.backgroundColor="white";
    }
    
    console.log(currMode);
})