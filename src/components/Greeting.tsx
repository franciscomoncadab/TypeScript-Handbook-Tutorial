import React from 'react';
import "./Greeting.css";

export interface Props {
     name: string;
     enthusiasmLevel?: number;
     onIncrement?: () => void;
     onDecrement?: () => void;
}

function Greeting({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) {
     if (enthusiasmLevel <= 0) {
          throw new Error("There is no negative level, sorry ;)");
     }

     const levelExclamation = (number: number) => {
          return Array(number + 1).join("!");
     }

     return ( 
          <div className="saludo">
               <div className="greet">
                    Hello {name + levelExclamation(enthusiasmLevel)}
               </div>
               <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
               </div>
          </div>
      );
}

export default Greeting;