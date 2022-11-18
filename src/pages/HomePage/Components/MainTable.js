import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { imgSrc } from '../../../const/const'
import { POPUPS } from '../../../const/popup'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { callPopup, splitSpace } from '../../../_helper/_helper'

const DraggableCard = styled.div`
  ${({ position }) =>
    position.x &&
    css`
      position: absolute;
      left: ${position.x}px;
      top: ${position.y}px;
    `}
`

const LinkWrapperStyled = styled(Link)`
  cursor: grab;
`

const ImageStyled = styled.img`
  width: 210px;
  height: auto;
`

const MainTable = () => {
  const dispatch = useDispatch()
  const caseFiles = useCaseFiles()

  const [shift, setShift] = useState({})

  const onDragStart = (e) => {
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e, file) => {
    const payload = {
      ...file,
      position: { x: e.pageX - shift.shiftX, y: e.pageY - shift.shiftY },
    }

    dispatch({ type: CASE_FILES_TYPES.MOVE_AROUND_TABLE, payload })
    setShift({})
  }

  return (
    <>
      {caseFiles.filesOnTable.map((file) => {
        return (
          <DraggableCard
            draggable={true}
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e, file)}
            key={splitSpace(file.alt)}
            position={file.position}
          >
            <LinkWrapperStyled
              title={file.alt}
              to={callPopup(POPUPS.caseFile)}
              state={file}
            >
              <ImageStyled src={`${imgSrc + file.imgPath}`} title={file.alt} />
            </LinkWrapperStyled>
          </DraggableCard>
        )
      })}
    </>
  )
}

export default MainTable
