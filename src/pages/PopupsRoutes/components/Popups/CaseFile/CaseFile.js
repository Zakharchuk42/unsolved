import { imgSrc } from '../../../../../const/const'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoExpandOutline } from 'react-icons/io5'
import { IoContractOutline } from 'react-icons/io5'
import { Flex } from '../../../../../components/styled/Flex.styled'

const ImageWrapper = styled.div`
  height: 95vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
`

const Image = styled.img`
  cursor: pointer;
  max-height: ${({ isZoome }) => (isZoome ? 'auto' : '95vh')};
`

const ButtonsWrapper = styled.div`
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px 0 0 20px;
  padding: 20px;

  svg {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const CaseFile = () => {
  const location = useLocation()
  const [isZoome, setIsZoom] = useState(false)

  useEffect(() => {
    setImg(location.state)
  }, [])

  const [img, setImg] = useState('')

  return (
    <>
      <ImageWrapper onClick={(e) => e.stopPropagation()}>
        <Image src={`${imgSrc}${img}`} isZoome={isZoome} />
      </ImageWrapper>
      <ButtonsWrapper onClick={(e) => e.stopPropagation()}>
        <Flex direction={'column'} gap={20}>
          <IoExpandOutline
            size='36px'
            color='#DC143C'
            onClick={() => setIsZoom(true)}
          />
          <IoContractOutline
            size='36px'
            color='#DC143C'
            onClick={() => setIsZoom(false)}
          />
        </Flex>
      </ButtonsWrapper>
    </>
  )
}

export default CaseFile
