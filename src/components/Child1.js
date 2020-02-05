import React,{Component} from 'react'
class Child1 extends Component {
    render () {
      return (
        <div>
          <input type='text' value={this.props.data} onChange = {this.update.bind(this)} ref='myInput'/>
        </div>
      )
    }
    update () {
      this.props.onUpdate(this.refs.myInput.value)
    }
    fetchData = (url) =>{
        this.setState({
            url
        })
    }
}

export default Child1