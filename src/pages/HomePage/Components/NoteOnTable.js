import styled from 'styled-components'
import { imgSrc } from '../../../const/const'

const WrapperStyled = styled.div`
  position: relative;
`

const NoteStyled = styled.div`
  cursor: grab;
  position: relative;
  width: 150px;
  height: 120px;
  padding: 20px 10px 10px 10px;
  background: #feea8f;
  font-family: 'Chelsea Market', cursive;
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0 0 21px 0;
  transform: ${({ position }) => `rotate(${position.rotate}deg)`};
  box-shadow: ${({ theme }) => theme.shadow};

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

const ImageStyled = styled.img`
  z-index: 1;
  position: absolute;
  right: 40%;
  top: -5px;
`

const NoteOnTable = (props) => {
  const { note } = props
  return (
    <WrapperStyled>
      <ImageStyled src={`${imgSrc}/images/pin.png`} />
      <NoteStyled position={note.position} {...props}>
        {note.text}
      </NoteStyled>
    </WrapperStyled>
  )
}

export default NoteOnTable
