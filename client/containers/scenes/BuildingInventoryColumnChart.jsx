import { connect } from 'react-redux'
import BuildingInventoryColumnChart from 'components/scenes/BuildingInventoryColumnChart'

const mapStateToProps = state => ({
  buildings: state.get('buildings')
})

export default connect(mapStateToProps, null)(BuildingInventoryColumnChart)