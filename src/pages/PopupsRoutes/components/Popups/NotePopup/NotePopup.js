import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Note } from '../../../../../components/styled/Note.styled'
import { imgSrc } from '../../../../../const/const'

const WrapperStyled = styled.div`
  position: relative;
`

const ImagePinStyled = styled.img`
  z-index: 1;
  transform: scale(1.5);
  position: absolute;
  right: 40%;
  top: -5px;
`

const NotePopup = () => {
  const location = useLocation()

  return (
    <WrapperStyled>
      <ImagePinStyled src={`${imgSrc}/images/pin.png`} />
      <Note width={350} height={250}>
        {location.state?.text}
      </Note>
    </WrapperStyled>
  )
}

export default NotePopup
