import { connect } from 'react-redux';
import Banner from './../components/Banner';

import { setStory, setScene } from './../actions/activeSelections';
import { toggleNavPanel } from './../actions/domDispositions';

const mapStateToProps = state => ({
  stories: state.stories,
  story: state.story,
  navPanel: state.navPanel,
});

const mapDispatchToProps = dispatch => ({
  clickMenu:  () => dispatch(toggleNavPanel()),
  clickStory: story => {
    dispatch(setStory(story));
    dispatch(setScene(0));
    dispatch(toggleNavPanel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);