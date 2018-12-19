import React from 'react';
import DropMultiSelect from './DropMultiSelect';

import './../styles/filters.css';

const Filters = ({ scenes, story, scene, buildings }) => (
  <div id='filters'>
    {
      scenes.length > 0 && scenes[story][scene].filters.bldgsMulti
      ? <DropDownMulti options={buildings} />
      : <div />
    }
  </div>
)

export default Filters;

// {
//   props.scenes[props.story][props.scene].filters.bldgsMulti

// }