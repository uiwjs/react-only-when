declare module '@uiw/react-only-when/switch' {
  import { FC, PropsWithChildren } from 'react';
  export declare const Switch: <T extends TagType>({ children }: PropsWithChildren) => null;
  type TagType = React.ElementType | keyof JSX.IntrinsicElements;
  interface CaseElementProps<T extends TagType> {
    as?: T;
    readonly condition?: boolean;
  }
  export type CaseProps<T extends TagType> = CaseElementProps<T> & React.ComponentPropsWithoutRef<T>;
  export declare const Case: <T extends TagType>(props: CaseProps<T>) => any;
  export declare const Default: <T extends TagType>(props: CaseProps<T>) => any;
}
