import styled from 'styled-components'

const LineStyled = styled.div`
  max-width: 130px;
  width: 100%;
  height: 1px;
  background: #f8f7f9;
  opacity: 50%;
  display: flex;
`

export const Line = (props) => <LineStyled {...props} />
