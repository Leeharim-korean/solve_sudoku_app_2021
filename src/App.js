import React from "react";
import Table from "./Table";
import "./App.css";
import { bigCells } from "./Cell";

function App() {
    return (
        <section>
            <h1>Hello!</h1>
            <table>
                <tbody className="big">
                    {bigCells.map(cell => (
                        <tr key={cell.id} className="small">{bigCells.map(cell => <Table key={cell.id} id={cell.id} />)}</tr>
                    )
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default App;