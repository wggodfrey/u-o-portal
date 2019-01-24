import React from 'react'
import styled from 'styled-components'
import { withFauxDOM } from 'react-faux-dom'
import withD3Renderer from 'hocs/withD3Renderer'

import { select as d3Select } from 'd3-selection'
import { 
    scaleBand as d3ScaleBand,
    scaleLinear as d3ScaleLinear,
    scaleOrdinal as d3ScaleOrdinal,
  } from 'd3-scale'
import { stack as d3Stack } from 'd3-shape'
import { transition as d3Transition } from 'd3-transition'

class StackedColumns extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { chart } = this.props
    return(<div style={{overflowX:'auto'}}>{chart}</div>)
  }

  renderD3(mode) {
    const { data, yLabel, colors, margins, columns, width, height, connectFauxDOM, animateFauxDOM } = this.props
    
    const render = mode === 'render'
    const resize = mode === 'resize'

    const xheight = (height < 400)? 400: height
    console.log(xheight)
    console.log(xheight - margins.top - margins.bottom - margins.top)
    const xwidth = {
      data: (data.filter(d => d.activeMulti).length + 1) * (columns.width + columns.padding),
      view: width,
    }
    
    let faux = connectFauxDOM('div', 'chart')
    let chart

    if (render) {
      chart = d3Select(faux)
        .append('svg')
        .attr('width', (xwidth.view > xwidth.data? xwidth.view: xwidth.data) - margins.left - margins.right)
        .attr('height', xheight - margins.top - margins.bottom)
        .attr('transform',`translate(${margins.left},${margins.top})`)
    } else if (resize) {
      chart = d3Select(faux)
        .select('svg')
        .attr('width', (xwidth.view > xwidth.data? xwidth.view: xwidth.data) - margins.left - margins.right)
        .attr('height', xheight - margins.top - margins.bottom)
        .attr('transform',`translate(${margins.left},${margins.top})`)
    } else {
      chart = d3Select(faux).select('svg')
    }

    let xScale = d3ScaleBand()
      .range([0, xwidth.data])
      .padding(columns.padding)
      .domain(data.map(d => d.nm))
    let yScale = d3ScaleLinear()
      .rangeRound([xheight - margins.top - margins.bottom, margins.top])
      .domain([0, Math.max(...data.map(d => d.total_nsf)) * 1.05]).nice()
    let cScale = d3ScaleOrdinal()
      .range(colors.reverse().map(d => d.hexfill))

    chart.selectAll('g.stack')
      .data(d3Stack().keys(colors.map(d => d.label_short + '_nsf'))(data))
      .enter()
      .append('g')
      .attr('class','stack')
      .attr('fill', d => cScale(d.key))
      .selectAll('rect')
        .data(d => d)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.data.nm))
        .attr('y', d => yScale(d[1]))
        .attr('height', d => yScale(d[0]) - yScale(d[1]))
        .attr('width', columns.width)



    
   
    animateFauxDOM(500)

  }

}

export default withFauxDOM(withD3Renderer({updateOn: ['data']})(StackedColumns))