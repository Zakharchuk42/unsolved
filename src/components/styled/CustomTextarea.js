import styled from 'styled-components'

const TextareaStyled = styled.textarea`
  width: 100%;
  resize: none;
  height: 100px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`

const CustomTextarea = (props) => {
  return <TextareaStyled autoFocus={true} {...props} />
}

export default CustomTextarea
