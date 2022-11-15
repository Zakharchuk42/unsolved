import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BackDropStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.5);
  transition: all 0.3s ease;
  opacity: ${({ opacity }) => opacity};
`

export const BackDrop = ({ children, isOpened }) => {
  const navigate = useNavigate()
  const [opacity, setOpacity] = useState(0)

  const closeModal = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (opacity === 0) {
      setTimeout(() => {
        setOpacity(1)
      }, 50)
    } else {
      setOpacity(0)
    }
  }, [isOpened])

  return (
    <BackDropStyled onClick={closeModal} opacity={opacity}>
      {children}
    </BackDropStyled>
  )
}
