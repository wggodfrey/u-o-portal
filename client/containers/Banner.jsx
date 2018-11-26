import { connect } from 'react-redux';
import Banner from './../components/Banner';

import { setStory } from './../actions/activeStory';
import { setScene } from './../actions/activeScene';
import { toggleNavOpts } from './../actions/navOpts';


const mapStateToProps = (state) => ({
  navOpts: state.navOpts,
  storyList: state.storyList,
  activeStory: state.activeStory,
});

const mapDispatchToProps = (dispatch) => ({
  clickNavOpts: () => dispatch(toggleNavOpts()),
  clickStory: (story) => {
    dispatch(setStory(story));
    dispatch(setScene(0));
    dispatch(toggleNavOpts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);