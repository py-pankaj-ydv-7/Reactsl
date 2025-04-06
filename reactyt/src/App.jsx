// import React, { useEffect, useState } from "react";
// import Card from "./components/Card";
// import Ex from "./components/Ex";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import About from "./pages/About";

// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

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


// const App = () => {
//   return (
//     <div>
//       <h2>Hello guys</h2>
//       <h1> Jai mata di </h1>
//     </div>
//   )
// }

// export default App


/********** form handling ********************/

// const App = () => {
//   const submitHandler=(e)=>{
//     e.preventDefault()           // is se page reload nahi ho rh hai.
//     console.log("submitted");
    
    
//   }
//   return (
//     <div>
//     <form onSubmit={(e)=>{   // form handling sikh gaya hu 
//       submitHandler(e)
//     }}>
//       <input placeholder="Enter your name " className="px-4 py-3 text-xl m-5 rounded text-black "/>
//       <button className=" text-white px-4 py-3 text-xl font-semibold bg-green-700 rounded m-5">Submit</button>
//     </form>
//     </div>
//   )
// }

// export default App



/*********************Two way Binding ************/

// const App = () => {
  // const submitHandler=(e)=>{
  //   e.preventDefault()           // is se page reload nahi ho rh hai.
  //   console.log("submitted"); 
// }

// const [username, setusername] = useState('')


// const submitHandler = (e)=>{
//   // console.log("Submitted")
//   e.preventDefault()
//   // console.log('submit ho rh hai ');
//   console.log(username);
//   setusername('')
  
// }
//   return (
//     <div>   
//     <form onSubmit={(e)=>{
//       submitHandler(e)
//     }}>
//       <input value={username}
//       onChange={(e)=>{setusername(e.target.value)
//       }}
//       placeholder="Enter your name " className="px-4 py-3 text-xl m-5 rounded text-black "/>
//       <button className=" text-white px-4 py-3 text-xl font-semibold bg-green-700 rounded m-5">Submit</button>
//     </form>
//     </div>
//   )
// }

// export default App


// /************ Components*********/
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <>
//     <Header/>
//     <Navbar/>
//     <Footer/>
//     <nav className="bg-emerald-950 flex py-5 px-10 items-center justify-between">
//       <h2 className="text-2xl">Pankaj Yadav</h2>
//       <div className="flex gap-8 items-center">
//         <h4 className="text-xl">About</h4>
//         <h4 className="text-xl">Contact</h4>
//         <h4 className="text-xl">Services</h4>
//         <h4 className="text-xl">Your Account</h4>
//       </div>
//     </nav>
    
//     </>
//   )
// }

// export default App

// const App = () => {
 
//   // const num = 10;

//   const users=
//     [
//       {
//         "name": "Pankaj",
//         "surname": "Yadav",
//         "city": "Gwalior",
//         "age": 25,
//         "profession": "Web Developer",
//         "profile": "https://example.com/pankaj-profile"
//       },
//       {
//         "name": "Priya",
//         "surname": "Yadav",
//         "city": "Lucknow",
//         "age": 22,
//         "profession": "Graphic Designer",
//         "profile": "https://example.com/priya-profile"
//       },
//       {
//         "name": "Amit",
//         "surname": "Yadav",
//         "city": "Indore",
//         "age": 28,
//         "profession": "Software Engineer",
//         "profile": "https://example.com/amit-profile"
//       },
//       {
//         "name": "Nidhi",
//         "surname": "Yadav",
//         "city": "Delhi",
//         "age": 30,
//         "profession": "Content Writer",
//         "profile": "https://example.com/nidhi-profile"
//       },
//       {
//         "name": "Rohan",
//         "surname": "Yadav",
//         "city": "Pune",
//         "age": 26,
//         "profession": "Data Analyst",
//         "profile": "https://example.com/rohan-profile"
//       }
//     ]
    
//   users.forEach(function(){

//   })



//   return (
//     <>
//     {/* <Card  a={"pankaj"}/>
//     <Card  a={"py"}/> */}
//    <div className="p-10">
//    {/* <Card user="Pankaj" surname="Yadav" age='69' city="Bhopal"/> */}
//    {users.map(function(elem,idx){
//     return <Card key={idx} username={elem.name} surname={elem.surname} age={elem.age} city={elem.city} profession={elem.profession} profile={elem.profile}/>
//    })}
//    </div>
//     </>
//   )
// }

// export default App


/********************New  ********/


// const App = () => {
//   return (
//     <div>
//       <Ex name="Pankaj"/>
//     </div>
//   )
// }

// export default App


/************** context api (axios) */

// import axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   // const [a, setA] = useState("py") 

//   const getData = async ()=>{
//    const response = await axios.get('https://picsum.photos/v2/list')
//   //  console.log(response);
//   // const data = response.data
//   //  console.log(data);
//    setData(response.data)
//    console.log(data);
   
//   };

//   useEffect(()=>{
//     getData()
//   })
      
    
  
//   return (
//     <div className="p-10">
//       {/* <button onClick={getData} className="bg-emerald-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button> */}
// <div className="p-5 mt-5 bg-gray-900">
//   {data.map(function(elem,idx){

//     return <div key={idx} className="bg-green-50 text-black flex items-center justify-between w-full px-7">
//         <img className="h-40" src={elem.download_url} alt="" />
//         <h1>{elem.author}</h1>
//     </div>
//   })}
// </div>
//     </div>
//   )
// }

// export default App

/******** Router Dom ***********/



// const App = () => {
//   return (
//     <div>
//       {/* <h1>Hello</h1> */}
//       <Header/>

//     <Routes>
    
//       <Route path='/About' element={<About/>} />
//       <Route path='/Product' element={<Product/>} />
//       <Route path='/' element={<Home/>} />
//       <Route path='/Contact' element={<Contact/>} />
//     </Routes>
//     </div>
//   )
// }

// export default App


/**************** context api ****************/


const App = () => {
  return (
    <div>
      <h1>This is app</h1>
      <Header/>
      <Footer/>
      <Section/>
    </div>
  )
}

export default App