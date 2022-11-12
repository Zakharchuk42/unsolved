import styled from 'styled-components'
import { Typography } from './Typography.styled'

const ButtonStyled = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 16px 32px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px -4px 0px inset;
  }

  &:active {
    box-shadow: none;
  }
`

export const Button = (props) => {
  return (
    <ButtonStyled onClick={props.onClick} {...props}>
      <Typography btn transform={'uppercase'}>
        {props.children}
      </Typography>
    </ButtonStyled>
  )
}