import styled from 'styled-components'

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`

export const CustomForm = (props) => <FormStyled {...props} />
