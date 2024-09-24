import './App.css';
import { DEL } from './delimetr/Del';
import { HW1 } from './HW/1/HW1';
import { HW2 } from './HW/2/HW2';
import { HW3 } from './HW/3/HW3';
import { HW4 } from './HW/4/HW4';

function App() {
  return (
    <div className="App">
      <HW1 />
      <DEL/>
      <HW2 />
      <DEL/>
      <HW3 />
      <DEL/>
      <HW4 />
    </div>
  );
}

export default App;
