import React from 'react';

import './../styles/panel.css';

class Panel extends React.Component {
  
  constructor(props) {
    super(props);
    this.navpanel = null;
    this.background = null;
  }

  componentDidUpdate() {
    if (this.props.navPanel) {
      this.navpanel.style.width = '210px';
      this.navpanel.style.padding = null;
      this.background.style.opacity = 0.75;
      this.background.style.pointerEvents = 'all';
    } else {
      this.navpanel.style.width = '0px';
      this.navpanel.style.padding = '10px 0px';
      this.background.style.opacity = 0;
      this.background.style.pointerEvents = 'none';
    }
  }

  render() {
    return (
      this.props.stories.length
      ? <div id='panel'>
          <div className='modal' ref={ ref => this.background = ref } onClick={ this.props.clickModal }></div>
          <div className='list' ref={ ref => this.navpanel = ref }>
            {
              this.props.stories.map((story, i) => 
                <div 
                  key={ `option_${i}` }
                  onClick={() => { this.props.clickStory(i) }}
                  className={ this.props.story === i? 'item active': 'item inactive' }>
                  <div className='story'>{story}</div>
                </div>
              )
            } 
          </div>
        </div>
      : <div></div> //...loading
    )
  }

}

export default Panel;