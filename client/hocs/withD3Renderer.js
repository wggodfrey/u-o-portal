import React from 'react'
import { shallowEqual } from 'recompose'

const withD3Renderer = ({resizeOn = ['width', 'height'], updateOn = ['data']}) => WrappedComponent => {
  return class WithD3Renderer extends React.Component {

    constructor(props) {
      super(props)
      this.setRef = wrappedComponentInstance => {
        this.component = wrappedComponentInstance
      }
    }

    componentDidMount() {
      this.component.renderD3('render')
    }

    componentDidUpdate(prevProps, prevState) {
      const shouldResize = ({width, height}) => ({width, height})
      if (!shallowEqual(shouldResize(this.props), shouldResize(prevProps))) {
        return this.component.renderD3('resize')
      }
      const shouldUpdate = ({data}) => ({data})
      if (!shallowEqual(shouldUpdate(this.props), shouldUpdate(prevProps))) {
        this.component.renderD3('update')
      }
    }

    render() {
      const {...otherProps} = this.props
      return <WrappedComponent ref={this.setRef} {...otherProps} />
    }
  }
}

export default withD3Renderer