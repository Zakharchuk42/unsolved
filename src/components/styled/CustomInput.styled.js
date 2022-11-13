import styled from 'styled-components'

const InputStyled = styled.input.attrs(({ placeholder }) => ({
  placeholder: placeholder && placeholder,
}))`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  outline: none;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.size.body};
`

export const CustomInput = (props) => {
  return <InputStyled {...props} />
}
