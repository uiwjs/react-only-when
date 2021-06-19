import React from 'react';

export interface OnlyWhenProps {
  /** A single child element */
  children: React.ReactElement;
  /** When true, children will rendered as is */
  when: boolean;
  /** This is working in combination with hiddenMode={"css"} */
  className?: string;
  /**
   * Determines how "react-only-when" should hide the child element
   * "null": Will not render the child
   * "display": Will render the child with display:none
   * "visibility": Will render the child with visibility:hidden
   * "css": Will render the child with a CSS class (you can pass it a custom className prop)
   */
  hiddenMode?: 'null' | 'display' | 'visibility' | 'css';
}

export default function OnlyWhen(props: OnlyWhenProps) {
  const { children, when, hiddenMode, className } = props;
  const singleChild = React.Children.only(children);
  const { style, ...restOfChildProps } = singleChild.props;
  const extendedProps = { ...restOfChildProps };

  const keepNode = hiddenMode && hiddenMode !== 'null';
  if (keepNode) {
    if (hiddenMode === 'css') {
      extendedProps.className = `${extendedProps.className || ''} ${className || ''}`.trim();
    } else {
      extendedProps.style = {
        ...style,
        ...(hiddenMode === 'display' && { display: 'none' }),
        ...(hiddenMode === 'visibility' && { visibility: 'hidden' }),
      };
    }
  }
  const cloned = React.cloneElement(singleChild, extendedProps);
  const toHide = keepNode ? cloned : null;

  return when ? singleChild : toHide;
}
