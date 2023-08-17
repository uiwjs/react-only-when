import { useState } from 'react';
import Only, { OnlyWhenProps } from '@uiw/react-only-when';

type CheckboxProps = {
  hiddenMode?: OnlyWhenProps['hiddenMode'];
  value?: OnlyWhenProps['hiddenMode'];
  onChange?: (evn: React.ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox(props: CheckboxProps) {
  const { hiddenMode, value, onChange } = props;
  return (
    <label>
      <input type="radio" value={hiddenMode} name="hiddenMode" checked={hiddenMode === value} onChange={onChange} />{' '}
      {value}
    </label>
  );
}

const App: React.FC = () => {
  const [when, setWhen] = useState(true);
  const [hiddenMode, setHiddenMode] = useState<OnlyWhenProps['hiddenMode']>('null');
  return (
    <div style={{ padding: 10, backgroundColor: 'rgb(0 0 0 / 17%)', minWidth: 360, borderRadius: 5 }}>
      <label>
        <input type="checkbox" checked={when} onChange={(e) => setWhen(e.target.checked)} /> when={`${when}`}
      </label>
      <div>
        <Checkbox hiddenMode={hiddenMode} value="null" onChange={() => setHiddenMode('null')} />
        <Checkbox hiddenMode={hiddenMode} value="display" onChange={() => setHiddenMode('display')} />
        <Checkbox hiddenMode={hiddenMode} value="visibility" onChange={() => setHiddenMode('visibility')} />
        <Checkbox hiddenMode={hiddenMode} value="css" onChange={() => setHiddenMode('css')} />
      </div>
      <Only when={when} hiddenMode={hiddenMode} className={hiddenMode === 'css' ? 'w-only-hidden' : ''}>
        <h1>Here I Am</h1>
      </Only>
    </div>
  );
};

export default App;
