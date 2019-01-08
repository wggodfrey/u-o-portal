import { connect } from 'react-redux';
import Storyboard from 'components/Storyboard';

import { setScene } from 'actions/activeSelections';

const mapStateToProps = state => ({
  stories: state.get('stories'),
});

const mapDispatchToProps = dispatch => ({
  clickScene: scene => dispatch(setScene(scene)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storyboard);