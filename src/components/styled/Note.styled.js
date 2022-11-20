import styled, { css } from 'styled-components'

const NoteStyled = styled.div`
  cursor: grab;
  position: relative;
  width: ${({ width }) => width || '180'}px;
  height: ${({ height }) => height || '120'}px;
  padding: 20px 10px 10px 10px;
  background: #feea8f;
  font-family: 'Chelsea Market', cursive;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0 0 21px 0;

  box-shadow: ${({ theme }) => theme.shadow};
  ${({ position }) =>
    position &&
    css`
      transform: rotate(${position.rotate}deg);
    `}

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(
      180deg,
      rgba(16, 16, 16, 0) 0%,
      rgba(254, 234, 143, 1) 100%
    );
  }

  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: #dfc550;
    right: 0;
    bottom: 0;
    transform: rotate(4deg);
  }
`
export const Note = (props) => {
  const { children } = props
  return <NoteStyled {...props}>{children}</NoteStyled>
}
