// let root = document.querySelector("#root")

// var p = document.createElement('p') // this is use for create element from js 

// let p = document.createElement('p')

// p.innerHTML="Hello pankaj i am p tag"  // like this is use for print in console what the text you gave the p tag.

// console.log(p);


// console.log(p);


// root.apendChild(p)  // using this we can display on the screen 

// when we work with the html, css, js : we work with the real dom  

// console.log(React);


//**************** React **********/

let h1 = React.createElement('h1',null,"Hello from react ")//null propes hai , waha props rakhte hai , properties , attributes
// let p = React.createElement('p',null," This is p tag ")//null propes hai , waha props rakhte hai , properties , attributes
let parent = document.querySelector("#parent")

let root = ReactDOM.createRoot(parent)

console.log(parent);


root.render(h1)
root.render(p)