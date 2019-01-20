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

class TreeDiagram extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { chart } = this.props
    return(<div>{chart}</div>)
  }

  renderD3(mode) {
    const { leafData, colors, width, height, connectFauxDOM, animateFauxDOM } = this.props
    
    const render = mode === 'render'
    const resize = mode === 'resize'
    console.log('render: ', render)
    console.log('resize: ', resize)

    const margin = {top:0, right:0, bottom:0, left:0}
    let leafFunc = d3Treemap()
      .tile(d3TreemapResquarify)
      .size([width, height])
      .round(true)
      .paddingInner(0)

    let branches = d3Hierarchy(leafData)
      .eachBefore(d => { d.data.id = (d.parent? d.parent.data.id + '.' : '') + d.data.name })
      .sum(d => d.size)
      .sort((a, b) => b.height - a.height || b.value - a.value )
    leafFunc(branches)
    
    
    let faux = connectFauxDOM('div', 'chart')
    let chart

    if (render) {
      chart = d3Select(faux)
        .append('svg')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr('transform',`translate(${margin.left},${margin.top})`)
    } else if (resize) {
      chart = d3Select(faux)
        .select('svg')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr('transform',`translate(${margin.left},${margin.top})`)
    } else {
      chart = d3Select(faux).select('svg')
    }
    let cells = chart.selectAll('rect').data(branches.leaves())
    cells
      .enter()
      .append('rect')
      .merge(cells)
      .attr('transform', d => `translate(${d.x0},${d.y0})`)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('stroke', 'white')
      .attr('stroke-opacity',0.5)
      .attr('stroke-width',0.5)
      .attr('fill', d => colors.filter(e => e.label_long === d.parent.data.id.split('.')[1])[0].hexfill)



    animateFauxDOM(500)

  }

}

export default withFauxDOM(withD3Renderer({updateOn: ['data']})(TreeDiagram))