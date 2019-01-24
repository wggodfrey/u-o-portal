import React from 'react'
import styled from 'styled-components'
import { withFauxDOM } from 'react-faux-dom'
import withD3Renderer from 'hocs/withD3Renderer'

import { select as d3Select } from 'd3-selection'
import { 
    hierarchy as d3Hierarchy,
    treemap as d3Treemap,
    treemapResquarify as d3TreemapResquarify,  
  } from 'd3-hierarchy'
import { transition as d3Transition } from 'd3-transition'

class TreeDiagram extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { chart } = this.props
    return(<div>{chart}</div>)
  }

  renderD3(mode) {
    const { data, colors, width, height, margins, connectFauxDOM, animateFauxDOM } = this.props
    
    const render = mode === 'render'
    const resize = mode === 'resize'

    const leafFunc = d3Treemap()
      .tile(d3TreemapResquarify)
      .size([width, height])
      .round(true)
      .paddingInner(0)

    const branches = d3Hierarchy(data)
      .eachBefore(d => { d.data.id = (d.parent? d.parent.data.id + '.' : '') + d.data.name })
      .sum(d => d.size)
      .sort((a, b) => b.height - a.height || b.value - a.value )
    leafFunc(branches)
    
    let faux = connectFauxDOM('div', 'chart')
    let chart

    if (render) {
      chart = d3Select(faux)
        .append('svg')
        .attr('width', width - margins.left - margins.right)
        .attr('height', height - margins.top - margins.bottom)
        .attr('transform',`translate(${margins.left},${margins.top})`)
    } else if (resize) {
      chart = d3Select(faux)
        .select('svg')
        .attr('width', width - margins.left - margins.right)
        .attr('height', height - margins.top - margins.bottom)
        .attr('transform',`translate(${margins.left},${margins.top})`)
    } else {
      chart = d3Select(faux).select('svg')
    }

    let cells = chart.selectAll('rect').data(branches.leaves())
    cells
      .enter()
      .append('rect')
      .merge(cells)
      .attr('stroke', 'white')
      .attr('stroke-opacity',0.5)
      .attr('stroke-width',0.5)
      .attr('fill', d => colors.filter(e => e.label_long === d.parent.data.id.split('.')[1])[0].hexfill)
      .attr('transform', d => `translate(${d.x0},${d.y0})`)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
   
    animateFauxDOM(500)

  }

}

export default withFauxDOM(withD3Renderer({updateOn: ['data']})(TreeDiagram))