import { connect } from 'react-redux';
import Controller from './../components/Controller';

import { setStory } from './../actions/activeStory';
import { setScene } from './../actions/activeScene';


const mapStateToProps = (state) => ({
  storyList: state.storyList,
  sceneList: state.sceneList,
  activeStory: state.activeStory,
  activeScene: state.activeScene,
});

const mapDispatchToProps = (dispatch) => ({
  clickScene: (scene) => dispatch(setScene(scene)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);