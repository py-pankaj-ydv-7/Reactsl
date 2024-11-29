import React, { useState } from "react";

// const App=()=>{

//   const a = 108

//   return (
//     <div>
//       <h1>Radhe Radhe {a}</h1>
//       <h2>Radhe Radhe {a} </h2>
//     </div>
// )
// }

// const App = () => {

//   const user = "Pankaj";
//   const age = 165
//   const abc =()=>{
//     console.log("py k video");
//   }

//   return (
//     <div>App {user} age {age}
//     <button onClick={abc}> ChangeUser </button>
//     </div>
//   )
// }

// export default App

/****************** new start *************/

// const App = () => {

//   let user = "Pankaj"

//   let ChangeUser =()=>{  // is tarike se hamara kaam bigdne wala hai , is tarike hum use nahi kar sakte hai
//     console.log(user);
//      user = "PY"
//      console.log(user);

//   }

//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={ChangeUser}>Change User</button>
//     </div>
//   )
// }

// export default App

// hooks - special type of functions

// a= 0
// a= 1

// const App = () => {
//   // const a = 10;// is tarike se variable nahi banane hai

//   const [a, setA] = useState(20)

//   const ChangeA =()=>{
//     console.log("chal gaya");   // bahut ache se samaj gaya me
//     setA(40)

//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={ChangeA}>ChangeA</button>
//     </div>
//   )
// }

// export default App
//********** Counter app bana rah hu ******/

// const App = () => {
//   const [num, setNum] = useState(0);
  

//   return (
//     <div>
//       <h2>Number is {num}</h2>

//       <button onClick={()=>setNum(num+1) } > Increment </button>

//       <button onClick={()=>setNum(num-1)} > Decrement </button>


//       <button onClick={()=>setNum(0)} > Reset </button>

//     </div>
//   );
// };

// export default App;


//*******************  *********************/


const App = () => {
  return (
    <div>
      <h2>Hello guys</h2>
      <h1> Jai mata di </h1>
    </div>
  )
}

export default App