// let heading = document.querySelector("h2");
// console.dir(heading.append(" with others"));

let divs = document.querySelectorAll(".box");

// divs[0].innerText = "hello from the other side 1";
// divs[1].innerText = "hello from the other side 2";
// divs[2].innerText = "hello from the other side 3";

let idx = 1;
for(div of divs){
    div.innerText = `hello from the other side ${idx}`;
    idx++;
}
