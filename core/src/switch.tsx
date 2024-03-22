import { type FC, type PropsWithChildren } from 'react';
import { DispatchSwitch, Context, useSwitch, useSwitchStore } from './switch.store';

export * from './case';

export const Switch: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useSwitch();
  return (
    <Context.Provider value={state}>
      <DispatchSwitch.Provider value={dispatch}>{children}</DispatchSwitch.Provider>
      <Render />
    </Context.Provider>
  );
};

const Render = () => {
  const state = useSwitchStore();
  let activeKey;
  for (var key in state.active) {
    if (state.active[key] === true) {
      activeKey = key;
      break;
    }
  }
  return state[activeKey ?? 'default'] ?? null;
};
