import React from 'react';
import styled from 'styled-components';

import Panel from 'containers/panel';

const Wrapper = styled.div`
  z-index:999;
  position: relative;
  width: calc(100% - 20px);
  height: 40px;
  padding: 2px 10px 1px;
  font-family: 'Roboto Condensed';
  color: #ffffff;
  background: #025468;
  filter: drop-shadow(0px 1.5px 1.5px rgb(63, 66, 71));
`

const Logo = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 72px;
  height: 39px;
  overflow: hidden;
  & img {
    position: relative;
    top: -13px;
    padding: 2px;
    max-height: 61px;
  }
`

const Title = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 275px);
  padding: 2px 0 0 0;

  font-family: Roboto;
  font-weight: 400;
  line-height: 39px;
  font-size: 16px;
`

const Crumb = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 150px;
  padding: 2px 0 0 0;

  font-family: 'Roboto Condensed';
  line-height: 39px;
  font-size: 16px;
`

const Banner = ({stories}) => {

  if (!stories.length) {
    return (<Wrapper/>)
  }

  let story = stories.filter(s => s.active)[0];
  return (
    <Wrapper>
      <Logo>
        <img src='images/uhm-logo.png'></img>
      </Logo>
      <Title>University of Hawai‘i: Mānoa</Title>
      <Panel stories={stories}></Panel>
      <Crumb>{ story.title }</Crumb>
    </Wrapper>
  )
}


export default Banner

// TODO: put logout, account details, modules in nav opts
