import { ReactElement, Children } from 'react';
import { FC, PropsWithChildren } from 'react';

export const Switch: FC<PropsWithChildren<{}>> = ({ children }) => {
  let matchChild: ReactElement | null = null;
  let defaultCase: ReactElement | null = null;
  Children.forEach(Children.toArray(children) as ReactElement<PropsWithChildren<CaseProps>>[], (child) => {
    if (!matchChild && child.type === Case) {
      const { condition } = child.props;
      const conditionIsTrue = Boolean(condition);
      if (conditionIsTrue) {
        matchChild = child;
      }
    } else if (!defaultCase && child.type === Default) {
      defaultCase = child;
    }
  });
  return matchChild ?? defaultCase ?? null;
};

export interface CaseProps {
  readonly condition?: boolean;
}

export const Case: FC<PropsWithChildren<CaseProps>> = ({ children }) => children;
export const Default: FC<PropsWithChildren> = ({ children }) => children;
