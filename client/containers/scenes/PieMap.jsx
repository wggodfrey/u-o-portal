import { connect } from 'react-redux'
import PieMap from 'components/scenes/PieMap'

const mapStateToProps = state => ({
  buildings: state.get('buildings'),
})

export default connect(mapStateToProps, null)(PieMap)