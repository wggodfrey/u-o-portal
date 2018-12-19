import React from 'react';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

import './../styles/mui.css';

const DropSingleSelect = props => {
  return (
    <div className='dropsingle'>
      <Select value={props.active || ''} onChange={props.handleSelect} placeholder={''}>
        <Option key={`opt_-1}`} value={''} label={''} />
        {
          props.options.map((opt, i) => {
            return <Option key={`opt_${i}`} value={opt.id} label={opt.nm} />
          })
        }
      </Select>
    </div>
  )
}

export default DropSingleSelect;