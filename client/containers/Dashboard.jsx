import { connect } from 'react-redux'
import Dashboard from 'components/Dashboard'

const mapStateToProps = state => ({
  stories: state.get('stories'),
})

export default connect(mapStateToProps, null)(Dashboard)