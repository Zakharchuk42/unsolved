import styled from 'styled-components'
import { imgSrc } from '../../const/const'

const ImageStyled = styled.img`
  width: 98px;
  height: 126px;
  object-fit: cover;
`

export const Image = ({ imgPath }) => (
  <ImageStyled src={`${imgSrc + imgPath}`} />
)
