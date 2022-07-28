import React, { useState } from 'react'
import './toggle.css';
const Toggle = () => {
  const [on, setOn] = useState(false);
  function handleClick(){
    setOn(on => !on)
  }
  //console.log(on)
  return (
    <div>
      <div className={`toggle ${on ? "active":""}`} onClick={handleClick}>
        <div className={`spinner ${on ? "active":""}`}>


        </div>
      </div>
      {/* <div className='toggle-control'>

        <div className='toggle-on' onClick={() => setOn(true)}>On</div>
        <div className='toggle-off' onClick={() => setOn(false)}>Off</div>
      </div> */}

    </div>
  )
}

export default Toggle

