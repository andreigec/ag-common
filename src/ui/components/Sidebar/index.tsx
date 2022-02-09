import React from 'react';
import styled from 'styled-components';
import { useCookieBoolean } from '../../helpers/cookie';
import { NoTextSelect, Shadow } from '../../styles/common';
import { Chevron } from '../Chevron';

const Base = styled.div`
  position: relative;
  transition: all 200ms;
  width: 15rem;
  border-right: solid 1px #ccc;
  margin-right: 1rem;
  padding-left: 0.5rem;

  &[data-open='false'] {
    width: 0.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover,
    &:hover [data-hover='true'] {
      background-color: #ccc;
    }
    &:hover {
      border-right: solid 1px #999;
    }
  }
  ${NoTextSelect};

  &:hover {
    [data-content] {
      left: 1rem;
    }
  }
`;

const ContentBlock = styled.div`
  left: -18rem;
  transition left 200ms;
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 15rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  &[data-open='false'] {
    padding: 1rem;
    background-color: white;
    ${Shadow()};
    border-radius: 1rem;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  transition: all 200ms;
  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }
  &[data-open='true'] {
    top: 0.5rem;
    right: -0.75rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.5);

  cursor: pointer;
`;

const ChevronStyled = styled(Chevron)`
  svg {
    fill: #555;
  }
`;

export const Sidebar = ({
  children,
  className,
  key = 'sidebar',
  cookieDocument,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
  /**
   * used for localstorage. default 'sidebar'
   */
  key?: string;
  /**
   * optionally pass in SSR cookiedocument
   */
  cookieDocument?: string;
}) => {
  const [open, setOpen] = useCookieBoolean({
    name: key,
    defaultValue: false,
    cookieDocument: cookieDocument,
  });

  return (
    <Base
      className={className}
      data-open={open}
      onClick={() => !open && setOpen(true)}
      data-hover
    >
      <Hamburger data-open={open} onClick={() => setOpen(!open)} data-hover>
        <ChevronStyled point={open ? 'right' : 'left'} width="100%" />
      </Hamburger>
      <ContentBlock data-content data-open={open}>
        <Content
          data-open={open}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </Content>
      </ContentBlock>
    </Base>
  );
};
