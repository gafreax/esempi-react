import { useState } from 'react' 
function RainbowMode() {
  const [mode, setMode] = useState('rainbow')

  return <div className={`page ${mode}-mode`}>
    <button onClick={() => setMode('rainbow')}>rainbow mode</button>
    <button onClick={() => setMode('light')}>light mode</button>
    <button onClick={() => setMode('dark')}>dark mode</button>
  </div>
}

export default RainbowMode

