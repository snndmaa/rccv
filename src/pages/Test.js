import React, {useState} from "react"

import useDragger from "../hooks/useDragger"
import { Resizable } from "re-resizable"

function Test() {  
  const [state, setState] = useState({ width: 320, height: 200 });
  return(
    <Resizable
      style={{ marginLeft: 500, marginTop: 200, border: "1px solid black" }}
      size={{ width: state.width, height: state.height }}
      onResizeStop={(e, direction, ref, d) => {
          setState({
            width: state.width + d.width, height: state.height + d.height,});
          }}>
      Sample with size
    </Resizable>
  )
}

export default Test