import { connect } from 'react-redux';
import Panel from './../components/Panel';

import { setScene, setStory } from './../actions/activeSelections';
import { toggleNavPanel } from './../actions/domDispositions';

const mapStateToProps = state => ({
  stories: state.stories,
  story: state.story,
  navPanel: state.navPanel,
});

const mapDispatchToProps = dispatch => ({
  clickModal: () => dispatch(toggleNavPanel()),
  clickStory: story => {
    dispatch(setStory(story));
    dispatch(setScene(0));
    dispatch(toggleNavPanel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);