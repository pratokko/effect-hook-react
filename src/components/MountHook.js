import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MountHook() {
    const [display, setDisplay] = useState(true)

function toggle () {
    setDisplay(prevState => !prevState)
}

  return (
    <div>
        <button onClick={toggle}>Toggle display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MountHook