import { connect } from 'react-redux'
import Filters from 'components/Filters'

import { toggleBuildingMulti, toggleBuildingsAll } from 'central/actions/activeSelections'

const mapStateToProps = state => ({
  buildings: state.get('buildings'),
})

const mapDispatchToProps = dispatch => ({
  toggleBuildingMulti: building => dispatch(toggleBuildingMulti(building)),
  toggleBuildingsAll: disposition => dispatch(toggleBuildingsAll(disposition)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)