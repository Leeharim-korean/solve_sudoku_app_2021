import React from "react";
import Table from "./Table";
import "./App.css";

const bigCell = [
  {
      id: 1,
  },
  {
      id: 2,
  },
  {
      id: 3,
  },
  {
      id: 4,
  },
  {
      id: 5,
  },
  {
      id: 6,
  },
  {
      id: 7,
  },
  {
      id: 8,
  },
  {
      id: 9,
  }
]

function App() {
  return (
   <div>
     <h1>Hello!</h1>
     <tbody class="big">
        {bigCell.map(cell => (
            <div class="small">{bigCell.map(cell =><Table id={cell.id}/>)}</div>
             )
        )}
     </tbody>
     
   </div>
  );
}



export default App;
