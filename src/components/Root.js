import React,{Component} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
class Root extends Component {
    constructor (props) {
      super(props)
      this.state = { data: '' }
    }
    render () {
      return (
        <div>
          {/* <Child1 /> */}
          <Child2 />
        </div>
      )
    }
  }
  export default Root