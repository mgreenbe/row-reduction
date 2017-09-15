import React, { Component } from "react";
import TeX from "./tex.js";
import "./App.css";

const A = <TeX>{"A"}</TeX>;
const i = <TeX>{"i"}</TeX>;
const m = <TeX>{"m"}</TeX>;
const One = <TeX>{"1"}</TeX>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Echelon forms</h3>
        <p>
          A matrix is in <b>row echelon form</b> (REF) if:
        </p>
        <ol>
          <li>All zero rows of {A} (if any) are at the bottom.</li>
          <li>
            Every nonzero row of {A} has a leading {One}.
          </li>
          <li>
            A leading {One} is the the right of all leading {One}s in rows above
            it.
          </li>
        </ol>
        <p>
          {A} is in <b>reduced row echelon form</b> (RREF) if, in addition, it
          satisfies:
        </p>
        <ol start={4}>
          <li>
            Every leading {One} of {A} is the only nonzero entry in its column.
          </li>
        </ol>
        <h3>Elementary row operations</h3>
        <ol>
          <li> Swap two different rows.</li>
          <li>
            {" "}
            Multiply a row by a <b>nonzero</b> number.
          </li>
          <li>
            {" "}
            Add a multiple of one row to a <b>different</b> one.
          </li>
        </ol>

        <h3>
          Reducing an <TeX>{"m\\times n"}</TeX> matrix {A} to REF
        </h3>
        <p className="monospace">
          for {i} from {One} to {m} do:
        </p>
        <ul>
          <li>
            If rows {i} through {m} are all zero, {A} is in REF. Done!
          </li>
          <li>
            {" "}
            Swap row {i} with a row <TeX>{"i'"}</TeX> whose leading entry is as
            far to the left as possible.
          </li>
          <li>
            Divide row {i} by its leading entry to create a leading {One}.
          </li>
          <li>
            Use Type 3 row operations to kill the nonzero entries below this
            leading {One}.
          </li>
        </ul>

        <h3>Reducing a matrix in REF to RREF</h3>
        <ul>
          <li>
            Working with the leading {One}s from right to left, use Type 3 row
            operations to kill the nonzero entries above them.
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
