import "./App.css";
// import Card from "./Components/Component/Card/Card";
import Grid from "./Components/Component/Grid/Grid";
// import Icons from "./Components/Component/Icons/Icons";
// import React from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

   
function App() {
 return (
   
   <div>
     <ToastContainer 
     position="top-center"
     autoClose={1000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     />
   {/* <Card /> */}
   <Grid  numberOfCards={9}/>
  
   
    </div>
   
 )
}

export default App;
  