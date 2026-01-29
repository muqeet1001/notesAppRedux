import React from "react";
 
 
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';

function App() {
  return (
    <div className="main w-full h-screen flex">

      <Sidebar/>
      <Notes/>
    </div>
  );
}

export default App;
