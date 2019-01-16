import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto;
  font-weight: 400;
  font-size: 13px;
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

const DropDownMulti = ({ label, data, handleSelec, toggleOpen }) => {
  
  let selectedCount = data.reduce((accum, elem, i, arr) => {
    return accum + (elem.activeMulti? 1: 0)
  }, 0)

  return (
    <Wrapper>
      <Input />
      <Label>{`${selectedCount} ${label} Selected`}</Label>
    </Wrapper>
  )
}

export default DropDownMulti

      // <Select value={props.active || ''} onChange={props.handleSelect} placeholder={''}>
      //   <Option key={`opt_0}`} value={''} label={''} />
      //   {
      //     props.options.map((opt, i) => {
      //       return <Option key={`opt_${i + 1}`} value={opt.id} label={opt.nm} />
      //     })
      //   }
      // </Select>