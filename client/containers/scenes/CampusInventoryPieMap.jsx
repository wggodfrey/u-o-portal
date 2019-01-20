import { connect } from 'react-redux'
import CampusInventoryPieMap from 'components/scenes/CampusInventoryPieMap'

const mapStateToProps = state => ({
  buildings: state.get('buildings'),
})

export default connect(mapStateToProps, null)(CampusInventoryPieMap)