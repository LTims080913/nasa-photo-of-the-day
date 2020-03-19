import React from "react";
import "./App.css";
import Featured from "./featured"
import styled from 'styled-components'



const Body = styled.div`
  background-color: cadetblue;
`

function App() {
  return (
    <Body className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <Featured/>
      </p>
    </Body>
  );
}

export default App;
