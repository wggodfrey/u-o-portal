import { connect } from 'react-redux'
import Filters from 'components/Filters'

const mapStateToProps = state => ({
  buildings: state.get('buildings'),
})

const mapDispatchToProps = dispatch => ({
  selectBuilding: building => {
    dispatch(setBuilding(building))
  }
})

export default connect(mapStateToProps, null)(Filters)