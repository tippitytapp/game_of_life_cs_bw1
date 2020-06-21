import React, {useState} from "react";
import produce from "immer"


const numRows = 24;
const numCols = 49;


function Grid(){
const [grid, setGrid] = useState(() => {
    const rows = []
    for (let i = 0; i< numRows; i++){
        rows.push(Array.from(Array(numCols), () => Math.floor(Math.random(2))))
    }
    return rows;
});
console.log(grid)
    return(
        <div className="grid" style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`}}>
            {grid.map((row, i )=> { 
                return(
                row.map((col, k) => {
                    return(
                        <div key={`${i}-${k}`} style={{width: 20, height: 20, backgroundColor: grid[i][k] ? 'orange' : undefined, border: '1px solid black'}}  onClick={()=>{
                            const newGrid = produce(grid, gridCopy => {
                                gridCopy[i][k] = gridCopy[i][k] ? 0 : 1;
                            })
                            setGrid(newGrid)
                        }}/>
                    )
                })
            )})}
        </div>
    )
}

export default Grid;