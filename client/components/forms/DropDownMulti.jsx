import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto;
  font-weight: 400;
  font-size: 13px;
  z-index: 5;
`

const Input = styled.input`
  width: calc(100% - 20px);
  height: 30px;
  padding: 10px 10px 0px;
  border-radius: 5px;
`

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 14px;
  transition: 0.3s ease all;
  opacity: 0.6;
  text-transform: capitalize;

  ${Input}:focus ~ & {
    top: 6px;
    left: 10px;
    font-size: 11px;
    opacity: 0.4;
  }
`

const ClickCatcher = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
`

const DropDownWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 200px;
  margin: 10px 0px 0px;
  background: #ffffff;
  border-radius: 5px;
  overflow-y: hidden;
  transition: 0.3s ease all;
`

const DropDown = styled.ul`
  max-height: 200px;
  overflow-y: scroll;
`

const Option = styled.li`
  width: calc(100% - 20px);
  margin: 1px 0px;
  padding: 2px 10px;
  font-size: 12px;
  background: #ffffff;
  cursor: pointer;
  &.active {
    color: #525252;
  }
  &.inactive {
    color: #a9a9a9;
  }
  &:hover {
    background: #a9a9a9;
    color: #ffffff;
  }
`

const Checkbox = styled.input`
  position: relative;
  top: -1px;
  margin: 0 5px 0 0;
  pointer-events: none;
`

class DropDownMulti extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  toggleDropDown() {
    this.setState(prev => ({
      open: !prev.open,
    }))
  }

  render() {
    let { label, data, handleSingle, handleAll } = this.props

    let selectedCount = data.reduce((accum, elem, i, arr) => {
      return accum + (elem.activeMulti? 1: 0)
    }, 0)

    return (
      <Wrapper>
        <Input 
          onFocus={ this.toggleDropDown.bind(this) }
        />
        <Label>{`${selectedCount} ${label} Selected`}</Label>
        <ClickCatcher 
          style={{pointerEvents: this.state.open? 'auto': 'none'}}
          onClick={ this.toggleDropDown.bind(this) }/>
        <DropDownWrapper
          style={{
            height: `${this.state.open? '100%': '0px'}`,
            padding: `${this.state.open? '5px 0': '0'}`,
          }}>
          <DropDown>
            <Option 
              className={selectedCount === data.length? 'active': 'inactive'}
              onClick={() => { handleAll(selectedCount === data.length? 'OFF': 'ON') }}>
              <Checkbox 
                type='checkbox' 
                checked={selectedCount === data.length}
                onChange={() => { }}
              />
              ALL
            </Option>
            {
              data.map(option => 
                <Option 
                  key={`option_${option.id}`}
                  className={option.activeMulti? 'active': 'inactive'}
                  onClick={() => { handleSingle(option.id) }}>
                  <Checkbox 
                    type='checkbox' 
                    checked={option.activeMulti}
                    onChange={() => { }}
                  />
                  {option.nm}
                </Option>
              )
            }
          </DropDown>
        </DropDownWrapper>
      </Wrapper>
    )
  }
  
}

export default DropDownMulti
