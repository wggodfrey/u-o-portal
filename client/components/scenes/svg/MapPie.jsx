import React from 'react'
import ReactFauxDom, { createElement } from 'react-faux-dom'
import { select as d3Select } from 'd3-selection'
import { pie as d3Pie, arc as d3Arc } from 'd3-shape'

const MapPie = ({
    id,
    radius,
    data,
    colors,
  }) => { 

  const arcFunc = d3Arc()
    .startAngle(function(d) { return d.startAngle })
    .endAngle(function(d) { return d.endAngle })
    .innerRadius(radius < 5? 0: radius/2.5)
    .outerRadius(radius)

  const pieFunc = d3Pie()
    .value(d => d)
    .sort(null)

  let chart = d3Select(createElement('svg'))
    .attr('width', radius * 2)
    .attr('height', radius * 2)
    .attr('transform', `translate(${-radius}, ${-radius})`)

  chart.append('g')
    .style('cursor','pointer')
    .selectAll('path')
    .data(pieFunc(data))
    .enter().append('path')
      .style('shape-rendering','geometricPrecision')
      .attr('stroke-width','0.1px')
      .attr('stroke','#a9a9a9')
      .attr('transform','translate(' + radius + ',' + radius + ')')
      .attr('fill',((d, i) => colors[i].hexfill))
      .attr('d',(d => arcFunc(d)))

  return (
    chart.node().toReact()
  )
}

export default MapPie