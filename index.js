// let root = document.querySelector("#root")

// var h1 = document.createElement('h1') // this is use for create element from js 

// let p = document.createElement('p')

// h1.innerHTML="Hello pankaj i am h1 tag"  // like this is use for print in console what the text you gave the h1 tag.

// console.log(p);


// console.log(h1);


// root.appendChild(h1)  // using this we can display on the screen 

// when we work with the html, css, js : we work with the real dom  

// console.log(React);


//**************** React **********/

var h1 = React.creatElement('h1',null,"Hello from react ")

let parent = document.querySelector("#parent")

let root = ReactDOM.createRoot(parent)

root.render(h1)