import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 39px;
  width: 49px;
  padding: 2px 0;
  text-align: center;
  line-height: 39px;
  background: none;
  & img {
    cursor: pointer;
    &:hover {
      background: #759ea9;
    }
  }
` 

const List = styled.div`
  position: fixed;
  top: 44px;
  right: 0px;
  height: calc(100vh - 51px);
  font-family: 'Roboto Condensed';
  background: #759ea9;
  transition: 1s width, 1s padding;
  &.open {
    width: 196px;
    padding: 10px 5px;
  }
  &.closed {
    width: 0px;
    padding: 10px 0;
  }
  & .item {
    display: inline-block;
    width: calc(100% - 33px);
    padding: 0px 0px 0px 33px;
    & .story {
      font-size: 14px;
      margin: 3px 0px;
      padding: 2px 4px;
    }
    &.active {
      & .story {
        color: #025468;
      }
    }
    &.inactive {
      & .story {
        cursor: pointer;
        color: #ffffff;
      }
      &:hover {
        background: #025468;
      }
    }
  }
`

const Option = styled.div`
  
`

class Panel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  togglePanel() {
    this.setState(prev => {
      return ({
        open: !prev.open,
      })
    })
  }

  render() {
    return (
      <span>
        <Button onClick={ this.togglePanel.bind(this) }>
          <img src={'icons/baseline-list-36px.svg'}/>
        </Button>
        <List 
          className={ this.state.open? 'open': 'closed' }>
          {
            this.props.stories.map((story, i) => 
              <div 
                key={ `option_${i}` }
                className={ story.active? 'item active': 'item inactive' }
                onClick={() => {
                  this.togglePanel()
                  this.props.clickStory(i)
                }}>
                <div className='story'>{story.title}</div>
              </div>
            )
          } 
        </List>
      </span>
    )
  }
}

export default Panel;

// <div className='modal' ref={ ref => this.background = ref } onClick={ () => {} }></div>