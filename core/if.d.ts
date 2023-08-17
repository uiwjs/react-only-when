declare module '@uiw/react-only-when/if' {
  import { ReactElement } from 'react';
  import { FC, PropsWithChildren } from 'react';
  export interface IfProps {
    readonly condition?: boolean;
    readonly render?: () => ReactElement;
  }
  export const If: FC<PropsWithChildren<IfProps>>;
}
