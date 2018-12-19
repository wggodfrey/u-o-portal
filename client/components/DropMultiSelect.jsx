import React from 'react';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

import './../styles/mui.css';

const DropMultiSelect = ({ handleSelect }) => {
  return (
    <div className='dropdown-single'>
      <Select value={props.active || ''} onChange={props.handleSelect} placeholder={''}>
        <Option key={`opt_0}`} value={''} label={''} />
        {
          props.options.map((opt, i) => {
            return <Option key={`opt_${i + 1}`} value={opt.id} label={opt.nm} />
          })
        }
      </Select>
    </div>
  )
}

export default DropMultiSelect;