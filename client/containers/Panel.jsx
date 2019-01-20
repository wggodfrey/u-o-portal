import { connect } from 'react-redux'
import Panel from 'components/Panel'

import { setScene, setStory } from 'central/actions/activeSelections'

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  clickStory: story => {
    dispatch(setStory(story))
    dispatch(setScene(0))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Panel);