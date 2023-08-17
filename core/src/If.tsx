import { ReactElement } from 'react';
import { FC, PropsWithChildren } from 'react';

export interface IfProps {
  readonly condition?: boolean;
  readonly render?: () => ReactElement;
}

export const If: FC<PropsWithChildren<IfProps>> = (props) =>
  props.condition ? (props.render ? props.render() : (props.children as ReactElement)) : null;
