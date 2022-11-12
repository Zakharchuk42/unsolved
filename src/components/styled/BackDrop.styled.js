import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BackDropStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.5);
  transition: all 0.3s ease;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
`

export const BackDrop = ({ children, isOpened }) => {
  const navigate = useNavigate()

  const closeModal = () => {
    navigate(-1)
  }

  return (
    <BackDropStyled onClick={closeModal} isOpened={isOpened}>
      {children}
    </BackDropStyled>
  )
}
