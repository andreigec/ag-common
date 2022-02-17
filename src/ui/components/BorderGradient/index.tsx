import { colours } from '../../styles/colours';
import styled, { css } from 'styled-components';
import React from 'react';

interface IBG {
  left?: string;
  right?: string;
  radius: string;
  noGrow?: boolean;
  disabled: boolean;
  canClick: boolean;
}
const BGcss = css<IBG>`
  display: flex;
  border: 0;
  padding: 3px;
  border-radius: ${({ radius }) => radius};
  background-image: linear-gradient(white, white),
    linear-gradient(
      to bottom right,
      ${({ left }) => left},
      ${({ right }) => right}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
  ${({ noGrow }) =>
    !noGrow &&
    css`
      flex-grow: 1;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
    `}

${({ canClick, disabled }) =>
    css`
      cursor: ${canClick && !disabled ? 'pointer' : 'default'};
    `}

  ${({ canClick, disabled }) =>
    canClick &&
    !disabled &&
    css`
      &:hover {
        filter: saturate(3);
      }
    `}
`;

const BGLink = styled.div<IBG>`
  ${BGcss};
`;

const BGALink = styled.a<IBG>`
  ${BGcss};
`;

interface IFeatureBoxFill {
  left: string;
  right: string;
  radius: string;
  padding: string;
}
const Padding = styled.div<{ padding: string }>`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  padding: ${({ padding }) => padding};
  border: 0;
  flex-grow: 1;
`;

const FeatureBoxFill = styled(Padding)<IFeatureBoxFill>`
  background-image: linear-gradient(
    to bottom right,
    ${({ left }) => left},
    ${({ right }) => right}
  );
  color: ${colours.mainLight};
  border-radius: ${({ radius }) => radius};
  flex-grow: 1;
`;
type IOnClick =
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>;
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
}: {
  canClick?: boolean;
  noGrow?: boolean;
  className?: string;
  fill?: boolean;
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
}) => {
  const props = {
    onClick: (e: IOnClick) => !disabled && onClick && onClick(e),
    className,
    left: (!fill && left) || undefined,
    right: (!fill && right) || undefined,
    radius,
    href,
    target,
    rel,
    noGrow,
    disabled,
    canClick: !!onClick || canClick,
  };

  const child = (
    <>
      {!fill && <Padding padding={padding}>{children}</Padding>}
      {fill && (
        <FeatureBoxFill
          left={left}
          right={right}
          radius={radius}
          padding={padding}
        >
          {children}
        </FeatureBoxFill>
      )}
    </>
  );

  if (href) {
    return <BGALink {...props}>{child}</BGALink>;
  }
  return <BGLink {...props}>{child}</BGLink>;
};
