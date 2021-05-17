import { Component } from 'react'

function isLeftClickEvent(event) {
  return event.button === 0
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class Link extends Component {

  static defaultProps = {
    onClick: null,
  }

  handleClick = event => {
    if (this.props.onClick) {
      event.preventDefault()
      this.props.onClick(event)
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()
    window.location = this.props.to
  }

  render() {
    const { to, className, children, style, ...props } = this.props
    return (
      <a href={to} {...props} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default Link
