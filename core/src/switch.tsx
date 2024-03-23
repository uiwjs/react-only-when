import type { FC, PropsWithChildren } from 'react';

type Child = typeof Case | typeof Default;
export const Switch: FC<PropsWithChildren<{}>> = ({ children }) => {
  let matchChild: Child | null = null;
  let defaultCase: typeof Default | null = null;

  const childs = Array.isArray(children) ? children : [children];
  childs.some((child) => {
    if (!defaultCase && child && child.type === Default) {
      defaultCase = child;
    }
    if (child && child.type === Case) {
      const { condition } = child.props;
      const conditionIsTrue = Boolean(condition);
      if (conditionIsTrue) {
        matchChild = child;
        return true;
      }
    }
    return false;
  });
  return matchChild ?? defaultCase ?? null;
};

type TagType = React.ElementType | keyof JSX.IntrinsicElements;
interface CaseElementProps<T extends TagType> {
  as?: T;
  readonly condition?: boolean;
}

export type CaseProps<T extends TagType> = CaseElementProps<T> & React.ComponentPropsWithoutRef<T>;

export const Case = <T extends TagType>(props: CaseProps<T>) => {
  const { children, condition, as: Comp, ...reset } = props;
  const Elm = Comp as TagType;
  return Elm ? <Elm {...reset}>{children}</Elm> : children;
};

export const Default = <T extends TagType>(props: Omit<CaseProps<T>, 'condition'>) => (
  <Case {...({ ...props } as CaseProps<T>)} />
);
