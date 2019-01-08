import { connect } from 'react-redux'
import Banner from 'components/Banner'

import { setStory, setScene } from 'actions/activeSelections'

const mapStateToProps = state => ({
  stories: state.get('stories'),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Banner)