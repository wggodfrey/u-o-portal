import React from 'react';

import './../styles/banner.css';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.navbutton = null;
  }

  componentDidUpdate() {
    this.navbutton.blur();
  }

  render() {
    return (
      this.props.stories.length
      ? <div id='banner'>
          <div className='logo'>
            <img src='images/uhm-logo.png'></img>
          </div>
          <div className='title'>University of Hawai‘i: Mānoa</div>
          <button className='button' ref={ ref => this.navbutton = ref } onClick={ this.props.clickMenu }>
            <img src={"icons/baseline-list-36px.svg"}/>
          </button>
          <div className='crumb'>{ this.props.stories[this.props.story] }</div>
        </div>
      : <div></div> //...loading
    );
  }
}

export default Banner;

// TODO: put logout, account details, modules in nav opts