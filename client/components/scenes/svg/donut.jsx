import React from 'react'
import ReactFauxDom, { createElement } from 'react-faux-dom'
import withD3Renderer from 'utils/withD3Renderer'
import { select as d3Select } from 'd3-selection'
import { pie as d3Pie, arc as d3Arc } from 'd3-shape'

const mapScales  = [591657550.500000,295828775.300000,147914387.600000,73957193.820000,36978596.910000,18489298.450000,9244649.227000,4622324.614000,2311162.307000,1155581.153000,577790.576700,288895.288400,144447.644200,72223.822090,36111.911040,18055.955520,9027.977761,4513.988880,2256.994440,1128.497220]
const ncesColors = [
  {category:'Classroom',hexfill:'#2C5985',hextext:'#FFFFFF'},
  {category:'Class Laboratory',hexfill:'#347EA1',hextext:'#FFFFFF'},
  {category:'Open Laboratory',hexfill:'#4BA5BA',hextext:'#FFFFFF'},
  {category:'Research Laboratory',hexfill:'#89C8CC',hextext:'#FFFFFF'},
  {category:'Office Facilities',hexfill:'#EEDBBD',hextext:'#000000'},
  {category:'Study Facilities',hexfill:'#E8B777',hextext:'#000000'},
  {category:'Special Use Facilities',hexfill:'#D38C54',hextext:'#000000'},
  {category:'General Use Facilities',hexfill:'#BD603B',hextext:'#FFFFFF'},
  {category:'Support Facilities',hexfill:'#9F3632',hextext:'#FFFFFF'},
  {category:'Health Care Facilities',hexfill:'#BE89AC',hextext:'#FFFFFF'},
  {category:'Residential Facilities',hexfill:'#9A6A96',hextext:'#FFFFFF'},
  {category:'Circulation',hexfill:'#DCD4D0',hextext:'#000000'},
  {category:'Building Service',hexfill:'#B7AFAB',hextext:'#000000'},
  {category:'Mechanical',hexfill:'#948C88',hextext:'#FFFFFF'},
  {category:'Unclassified Space',hexfill:'#736967',hextext:'#FFFFFF'}]

const Donut = ({
    zoom,
    nm,
    classroom_nsf,
    classlab_nsf,
    openlab_nsf,
    researchlab_nsf,
    officefac_nsf,
    studyfac_nsf,
    specialuse_nsf,
    generaluse_nsf,
    support_nsf,
    healthcare_nsf,
    residential_nsf,
    circulation_nsf,
    bldgsvc_nsf,
    mechanical_nsf,
    unclassified_nsf,
  }) => { 

  const data = [+classroom_nsf, +classlab_nsf, +openlab_nsf, +researchlab_nsf, +officefac_nsf, +specialuse_nsf, +generaluse_nsf, +support_nsf, +healthcare_nsf, +residential_nsf, +circulation_nsf, +bldgsvc_nsf, +mechanical_nsf, +unclassified_nsf]
  const totalValue = data.reduce((accum, elem) => accum + elem)
  const outerRadius = Math.sqrt(totalValue / 10) / Math.pow(mapScales[zoom], 1/(zoom - 10))
  const innerRadius = (outerRadius < 5? 0: outerRadius/2.5)
  const arcFunc = d3Arc()
    .startAngle(function(d) { return d.startAngle })
    .endAngle(function(d) { return d.endAngle })
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
  const pieFunc = d3Pie()
    .value(d => d)
    .sort(null)

  let chart = d3Select(createElement('svg'))
    .attr('width', outerRadius * 2)
    .attr('height', outerRadius * 2)
    .attr('transform', `translate(${-outerRadius}, ${-outerRadius})`)

  chart.append('g')
    .selectAll('path')
    .data(pieFunc(data))
    .enter().append('path')
      .style('shape-rendering','geometricPrecision')
      .attr('stroke-width','0.1px')
      .attr('stroke','#a9a9a9')
      .attr('transform','translate(' + outerRadius + ',' + outerRadius + ')')
      .attr('fill',((d, i) => ncesColors[i].hexfill))
      .attr('d',(d => arcFunc(d)))

  return (
    chart.node().toReact()
  )
}

export default Donut