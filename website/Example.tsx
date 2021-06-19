import { useState } from 'react';
import Only from '../';

const App: React.FC = () => {
  const [when, setWhen] = useState(true);
  return (
    <div>
      <label>
        <input type="checkbox" checked={when} onChange={(e) => setWhen(e.target.checked)} /> when={`${when}`}
      </label>
      <Only when={when}>
        <h1>Here I Am</h1>
      </Only>
    </div>
  );
};

export default App;
