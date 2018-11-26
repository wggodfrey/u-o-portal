import { connect } from 'react-redux';
import Dashboard from './../components/Dashboard';

const mapStateToProps = (state) => ({
  activeStory: state.activeStory,
  activeScene: state.activeScene,
});

export default connect(mapStateToProps, null)(Dashboard);