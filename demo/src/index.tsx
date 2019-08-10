import React from 'react'
import {render} from 'react-dom'
import Core from "./Core";

class Demo extends React.Component {
  render() {
    return <Core/>
  }
}

render(<Demo/>, document.querySelector('#demo'))
