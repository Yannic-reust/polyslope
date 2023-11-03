import { useEffect } from 'react';
import './App.css'
import Experience from './components/Experience';

function App() {

  useEffect(() => {
    // add default sonar font to body
    document.body.classList.add('font-sonar', 'text-white');
  }, []);

  return (
    <>
      <div>
        <Experience />
      </div>
    </>
  )
}

export default App
