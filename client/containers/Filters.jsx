import { connect } from 'react-redux';
import Filters from './../components/Filters';

const mapStateToProps = state => ({
  story: state.story,
  scene: state.scene,
  scenes: state.scenes,
  buildings: state.buildings,
});

const mapDispatchToProps = dispatch => ({
  selectBuilding: building => {
    dispatch(setBuilding(building));
    dispatch(getRooms)
  }
});

export default connect(mapStateToProps, null)(Filters);