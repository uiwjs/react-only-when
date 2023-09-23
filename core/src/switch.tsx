import { type FC, type PropsWithChildren } from 'react';
import { DispatchSwitch, Context, useSwitch, useSwitchStore } from './switch.store';
import { Case, Default } from './case';

export * from './case';

export const Switch: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useSwitch();
  const filteredChildren = [];
  const childs = Array.isArray(children) ? children : children ? [children] : null;
  if (childs) {
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      if (child && (child.type === Case || child.type === Default)) {
        filteredChildren.push(child);
      }
    }
  }
  return (
    <Context.Provider value={state}>
      <DispatchSwitch.Provider value={dispatch}>{childs}</DispatchSwitch.Provider>
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
