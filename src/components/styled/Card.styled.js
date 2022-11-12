import styled from 'styled-components'

const CardStyled = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 8px;
  min-width: 30%;
`

export const Card = ({ children, onClick }) => {
  return <CardStyled onClick={onClick}>{children}</CardStyled>
}
