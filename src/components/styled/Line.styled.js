import styled from 'styled-components'

const LineStyled = styled.div`
  max-width: 130px;
  width: 100%;
  height: 1px;
  background: ${({ color, theme }) =>
    color ? theme.colors.red : theme.colors.white};
  opacity: 90%;
  display: flex;
`

export const Line = (props) => <LineStyled {...props} />
