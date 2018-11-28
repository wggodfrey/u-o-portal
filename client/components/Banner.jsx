import React from 'react';

import './../styles/banner.css';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.navpanel = null;
    this.backgrnd = null;
  }

  componentDidUpdate() {
    if (this.props.navOpts) {
      this.navpanel.style.width = '180px';
      this.navpanel.style.padding = null;
      this.backgrnd.style.opacity = 0.75;
      this.backgrnd.style.pointerEvents = 'all';
    } else {
      this.navpanel.style.width = '0px';
      this.navpanel.style.padding = '5px 0px';
      this.backgrnd.style.opacity = 0;
      this.backgrnd.style.pointerEvents = 'none';
    }
  }

  render() {
    return (
      this.props.storyList.length
      ? <div id='banner'>
          <div className='logo'>
            <img src='images/uhm-logo.png'></img>
          </div>
          <div className='title'>University of Hawai‘i: Mānoa</div>
          <div className='nav-opts'>
            <i className='material-icons' onClick={ this.props.clickNavOpts }>list</i>
            <div className='modal' ref={ ref => this.backgrnd = ref } onClick={ this.props.clickNavOpts }></div>
            <div className='list' ref={ ref => this.navpanel = ref }>
              {
                this.props.storyList.map((story, i) => 
                  <div 
                    key={ `option_${i}` }
                    onClick={() => { this.props.clickStory(i) }}
                    className={ this.props.activeStory === i? 'item active': 'item inactive' }>
                    <div className='story'>{story}</div>
                  </div>
                )
              } 
            </div>
          </div>
          <div className='nav-crumb'>{ this.props.storyList[this.props.activeStory] }</div>
        </div>
      : <div></div> //...loading
    );
  }
}

export default Banner;

// TODO: put logout, account details, modules in nav opts