import React, { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState();
  function color() {
    if (status === 200) {
      return "rgb(75, 226, 5)";
    } else {
      return "rgb(246, 6, 6)";
    }
  }
   function CheckServer() {
       fetch("http://127.0.0.1:5000").then((res) => {
         if(res.ok){setStatus(res.status)}
        
      }).catch((err)=>{
        console.log("catch");
        setStatus(404)
      });
  }
setInterval(function(){CheckServer()} ,60000)
  // clearInterval()
console.log("status",status);
  return (
    <div className="body">
      <div className="logoLeumi"></div>
      <div className="logoDevalore"></div>
      <div className="server1" style={{ backgroundColor: color() }}>
        {" "}
      </div>
    </div>
  );
}

export default App;
