import { connect } from 'react-redux'
import CampusInventoryTreeDiagram from 'components/scenes/CampusInventoryTreeDiagram'

const mapStateToProps = state => ({
  buildings: state.get('buildings'),
})

export default connect(mapStateToProps, null)(CampusInventoryTreeDiagram)