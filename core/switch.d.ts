declare module '@uiw/react-only-when/switch' {
  import { FC, PropsWithChildren } from 'react';
  export const Switch: FC<PropsWithChildren<{}>>;
  export interface CaseProps {
    readonly condition?: boolean;
  }
  export const Case: FC<PropsWithChildren<CaseProps>>;
  export const Default: FC<PropsWithChildren>;
}
