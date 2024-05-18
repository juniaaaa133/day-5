import React from 'react'
import './index.css'

const DataList = ({name,location,email}) => {

  return (
    <div className='list-ctn'>
      <div className="list">
            <div className="list-title main-f">Name</div>
            <div className="list-data main-f">{name}</div>
        </div>
        <div className="list">
            <div className="list-title main-f">Location</div>
            <div className="list-data main-f">{location}</div>
                  </div>
                  <div className="list">
            <div className="list-title main-f">Postal Code</div>
            <div className="list-data main-f">{email}</div>
                  </div>
    </div>
  )
}

export default DataList