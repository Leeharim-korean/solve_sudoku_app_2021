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
   <section>
     <h1>Hello!</h1>
     <table>
         <tbody className="big">
             {bigCell.map(cell => (
             <tr key={cell.id} className="small">{bigCell.map(cell =><Table key={cell.id} id={cell.id}/>)}</tr>
             )
             )}
         </tbody>
     </table>
   </section>
  );
}



export default App;
