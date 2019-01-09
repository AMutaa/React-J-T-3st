import React, { Componenent } from 'react';

class ReadMoreComponent extends Componenent {
  constructor(props, context) {
    super(props, context)

    this.toggleExpanded = this.toggleExpanded.bind(this)
    this.compareHeight = this.compareHeight.bind(this)

    this.state = {
      exceedsHeight: false,
      expanded: false
    }
  }

  componentDidMount() {
    this.compareHeight()
  }

  componentDidUpdate() {
    this.compareHeight()
  }

  componentWillReceiveProps(nextProps) {
    //compare the two arguments
    if (!_.isEqual(this.props.children, nextProps.children)) {
      this.setState({
        expanded: false
      })
      this.compareHeight()
    }
  }

  compareHeight() {
    const wrapper = this.refs.wrapper
    let isIE11 = !!window.MSInputMethidContext && !!document.documentMode;
    const exceedsHeightIE = wrapper && isIE11 && wrapper.scrollHeight > wrapper.offsetHeight + 10
    const exceedsHeightChrome = wrapper && wrapper.scrollHeight > wrapper.offsetHeight

    this.setState({
      //                                    (true)             (false)
      exceedsHeight: wrapper && isIE11 ? exceedsHeightIE : exceedsHeightChrome
    })
  }


  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  getShowLink() {
    //                                       (true)             (false)
    const linkText = this.state.expanded ? '...view less' : '...view more'
    return (
      <div style={{ position: 'absolute', bottom: '-1px', right: 0, backgroundColor: 'inherit' }}>
        <a onClick={this.toggleExpanded}></a>
      </div>
    )
  }
  render() {
    //                                       (true)            (false)
    const maxHeight = this.state.expanded ? 'none' : this.props.maxHeight + 'em'
    const wrapper = this.refs.wrapper
    const color = wrapper && window.getComputedStyle(wrapper, null).getPropertyValue('backgroundColor')
    const backgroundColor = color && color.slice(0, color.indexOf(")")) + ", 1)"
    const isExpanded = this.state.exceedsHeight || this.state.expanded
    const isBlurred = this.props.blurBottom && !this.state.expanded && this.state.exceedsHeight
    const styleBlur = {
      position: 'absolute',
      background: 'linear=gradient(0deg, ${backgroundColor}, transparent'

    }

    return (
      <div ref='wrapper' style={{ maxHeight, overflow: 'hidden', position: 'relative', backgroundColor: 'inherit' }}>
        <div onClick={isExpanded ? this.toggleExpanded : null}>
          {this.props.children}
        </div>
        {isBlurred ? <div style={styleBlur}></div> : null}
        {isExpanded ? <div style={{ paddingBottom: '15px' }} /> : null}
        {isExpanded ? this.getShowLink() : null}


      </div>
    )
  }

}

