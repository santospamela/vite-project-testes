import './App.css'
import { MyJoditEditor } from './components/MyJoditEditor'
import { MySunEditor } from './components/MySunEditor'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <MySunEditor />
      <MyJoditEditor />
    </div>
  )
}
