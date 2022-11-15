import { imgSrc } from '../../../../../const/const'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoExpandOutline } from 'react-icons/io5'
import { IoContractOutline } from 'react-icons/io5'
import { IoCloseOutline } from 'react-icons/io5'
import { IoAddOutline } from 'react-icons/io5'
import { Flex } from '../../../../../components/styled/Flex.styled'
import { useDispatch } from 'react-redux'
import { CASE_FILES_TYPES } from '../../../../../Store/types'

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
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [isZoome, setIsZoom] = useState(false)

  useEffect(() => {
    setCaseFile(location.state)
  }, [])

  const addOnTable = () => {
    navigate(-1)
    dispatch({
      type: CASE_FILES_TYPES.ADD_ON_TABLE,
      payload: {
        chapter: caseFile.chapter,
        id: caseFile.id,
      },
    })
  }

  const [caseFile, setCaseFile] = useState('')

  return (
    <>
      <ImageWrapper>
        <Image
          src={`${imgSrc + caseFile?.imgPath}`}
          isZoome={isZoome}
          onClick={(e) => e.stopPropagation()}
        />
      </ImageWrapper>
      <ButtonsWrapper onClick={(e) => e.stopPropagation()}>
        <Flex direction={'column'} align={'center'} gap={20}>
          <IoExpandOutline
            title={'Zoom in'}
            size='28px'
            color='#DC143C'
            onClick={() => setIsZoom(true)}
          />
          <IoContractOutline
            title={'Zoom out'}
            size='28px'
            color='#DC143C'
            onClick={() => setIsZoom(false)}
          />
          <IoCloseOutline
            title={'Close popup'}
            size='36px'
            color='#DC143C'
            onClick={() => navigate(-1)}
          />
          <IoAddOutline
            title={'Add on table'}
            size='36px'
            color='#DC143C'
            onClick={addOnTable}
          />
        </Flex>
      </ButtonsWrapper>
    </>
  )
}

export default CaseFile
