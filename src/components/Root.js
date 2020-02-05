import React,{Component} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
class Root extends Component {
    constructor (props) {
      super(props)
      this.state = { data: 'test' }
    }
    render () {
      return (
        <div>
          <Child1 onUpdate={this.onUpdate.bind(this)} data={this.state.data}/>
          <Child2 data={this.state.data}/>
        </div>
      )
    }
    onUpdate (data) { this.setState({ data:data.toUpperCase() }) }
  }
  export default Root