import { useEffect, useId } from 'react';
import { type InitialState, useSwitchDispatch } from './switch.store';

type TagType = React.ElementType | keyof JSX.IntrinsicElements;
interface CaseElementProps<T extends TagType> {
  as?: T;
  readonly condition?: boolean;
}

export type CaseProps<T extends TagType> = CaseElementProps<T> & React.ComponentPropsWithoutRef<T>;

export const Case = <T extends TagType>(props: CaseProps<T>) => {
  const ids = useId();
  const dispatch = useSwitchDispatch();
  const { children, condition, as: Comp, ...reset } = props;
  const Elm = Comp as TagType;
  const child = Elm ? <Elm {...reset}>{children}</Elm> : children;
  const state: InitialState = { [ids]: child, active: { [ids]: !!condition } };
  useEffect(() => dispatch(state), [state]);
  return null;
};

export const Default = <T extends TagType>(props: CaseProps<T>) => {
  const dispatch = useSwitchDispatch();
  const { children, as: Comp, ...reset } = props;
  const Elm = Comp as TagType;
  const child = Elm ? <Elm {...reset}>{children}</Elm> : children;
  useEffect(() => dispatch({ default: child }), [props]);
  return null;
};
