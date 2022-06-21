import { colours } from '../../styles/colours';
import styled, { css } from 'styled-components';
import React from 'react';

const BGcss = css`
  display: flex;
  border: 0;
  padding: 3px;
  background-image: linear-gradient(white, white),
    linear-gradient(to bottom right, var(--left), var(--right));
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
  &[data-ccnd='true'] {
    &:hover {
      filter: saturate(3);
    }
  }
`;

const BGLink = styled.div`
  ${BGcss};
`;

const BGALink = styled.a`
  ${BGcss};
`;

const Padding = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  border: 0;
  flex-grow: 1;
`;

const FeatureBoxFill = styled(Padding)`
  background-image: linear-gradient(to bottom right, var(--left), var(--right));
  color: ${colours.mainLight};
  flex-grow: 1;
`;
type IOnClick =
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>;

export interface IBorderGradient {
  canClick?: boolean;
  noGrow?: boolean;
  className?: string;
  fill?: boolean;
  /** default 2rem */
  radius?: string;
  left?: string;
  right?: string;
  children: JSX.Element | (JSX.Element | string | number | undefined)[];
  padding?: string;
  onClick?: (e: IOnClick) => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}
export const BorderGradient = ({
  left = colours.orange,
  right = colours.orangeRed,
  children,
  radius = '2rem',
  fill = false,
  padding = '2rem',
  className,
  onClick,
  href,
  target,
  rel,
  noGrow = false,
  disabled = false,
  canClick = false,
}: IBorderGradient) => {
  const CCND = canClick && !disabled;
  const style: Record<string, string | number> = {
    flexGrow: noGrow ? 0 : 1,
    '--left': left,
    '--right': right,
    borderRadius: radius,
    filter: !disabled ? '' : 'grayscale(1)',
    cursor: CCND ? 'pointer' : 'default',
  };

  const props = {
    onClick: (e: IOnClick) => !disabled && onClick && onClick(e),
    className,
    href,
    target,
    rel,
    canClick: !!onClick || canClick,
    style,
    'data-ccnd': CCND,
  };

  const child = (
    <>
      {!fill && <Padding style={{ padding }}>{children}</Padding>}
      {fill && <FeatureBoxFill style={{ padding }}>{children}</FeatureBoxFill>}
    </>
  );

  if (href) {
    return <BGALink {...props}>{child}</BGALink>;
  }
  return <BGLink {...props}>{child}</BGLink>;
};
