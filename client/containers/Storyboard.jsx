import { connect } from 'react-redux';
import Storyboard from './../components/Storyboard';

import { setStory, setScene } from './../actions/activeSelections';

const mapStateToProps = state => ({
  stories: state.stories,
  scenes: state.scenes,
  story: state.story,
  scene: state.scene,
});

const mapDispatchToProps = dispatch => ({
  clickScene: scene => dispatch(setScene(scene)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Storyboard);