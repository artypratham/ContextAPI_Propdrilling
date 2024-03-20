// import { Suspense, lazy } from "react"
// import {BrowserRouter, Routes , Route, useNavigate} from 'react-router-dom'


// const Dashboard  = lazy(() =>  import("./components/Dashboard"))
// const Landing = lazy(() =>  import ("./components/Landing"))

// function App() {


//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar/>
//         <Routes>
//           <Route path= "/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
//           <Route path= "/" element={<Suspense fallback={"loading..."}> <Landing/> </Suspense>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function AppBar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <div> 
//         <button style={{backgroundColor: "blueviolet"}} onClick={() => {
//             navigate("/")
//         }}>Landing Page</button>


//         <button style={{backgroundColor: "lightcoral"}} onClick={() => {
//          navigate("/dashboard")
//         }}>Dashboard</button>
//       </div>
//     </div>
    
//   )
// }


// export default App
















// //counter aopo without context api
// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0);

//   return(
//     <div>
//         <Count count = {count}/>
//         <Buttons count= {count} setCount={setCount} />
//     </div>
//   )
// }


// function Count() {
//   return(
//     <div>
      
//       {count}
//     </div>

//   )
// }




// function Buttons( {count,setCount}) {
//   return(
//     <div>
//       <button onClick={() => {
//         setCount(count+1)
//       }}>Increase</button>

//       <button onClick={() => {
//         setCount(count-1)
//       }}>Decrease</button>
      
//     </div>

//   )
// }


// export default App












//increase decrease counter with Context API
import { useContext, useState } from "react"
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return(
    <div>
        <CountContext.Provider value={count}>
            <Count  setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}


function Count({setCount}) {
  return(
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount}/>
    </div>

  )
}





function CountRenderer() {
  const count = useContext(CountContext)
  return(
    <>
    {count}
    </>
  )
}







function Buttons( {setCount}) {
  const count = useContext(CountContext)
  return(
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>

      <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
      
    </div>

  )
}


export default App














