// Building the toggle component

import React from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import {Switch} from '../switch'

class Toggle extends React.Component {
  // 🐨 this toggle component is going to need to have state for `on`
  state = {
    on: false,
  }

  toggle = () => {
    //const { on }  = this.state;
    //this.setState({on: !on});
    //this.props.onToggle(this.state.on)

    // use updator function!!!
    // setState is asynchronous, might be batched
    // no guarantee what on will be when setState is processed
    // updator function provides the state when setState is being processed
    // !!!async setState => callback useful when action is to be performed after setting state on a state variable
    this.setState(currentState => {
      return { on: !currentState.on }
    }, () =>  this.props.onToggle(this.state.on))
    
  }
  // You'll also want a method to handle when the switch is clicked
  // which will update the `on` state and call the `onToggle` prop
  // 💰 this.props.onToggle(this.state.on)
  render() {
    // 🐨 here you'll want to return the switch with the `on` and `onClick` props
    return <Switch on={this.state.on} onClick={this.toggle}/>
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
