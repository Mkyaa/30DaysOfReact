import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { footerBg } = this.props
    return (
      <div className='footer-wrapper' style={footerBg} >Footer</div>
    )
  }
}
