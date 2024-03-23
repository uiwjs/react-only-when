declare module '@uiw/react-only-when/switch' {
  import type { FC, PropsWithChildren } from 'react';
  export const Switch: FC<PropsWithChildren<{}>>;
  type TagType = React.ElementType | keyof JSX.IntrinsicElements;
  interface CaseElementProps<T extends TagType> {
    as?: T;
    readonly condition?: boolean;
  }
  export type CaseProps<T extends TagType> = CaseElementProps<T> & React.ComponentPropsWithoutRef<T>;
  export const Case: <T extends TagType>(props: CaseProps<T>) => any;
  export const Default: <T extends TagType>(
    props: Omit<CaseProps<T>, 'condition'>,
  ) => import('react/jsx-runtime').JSX.Element;
}
