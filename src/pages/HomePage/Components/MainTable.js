import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { imgSrc } from '../../../const/const'
import { POPUPS } from '../../../const/popup'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { callPopup, splitSpace } from '../../../_helper/_helper'

const FilesOnTable = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const DraggableCard = styled.div`
  ${({ position }) =>
    position?.x !== null &&
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
  width: 140px;
  height: auto;
`

const MainTable = () => {
  const dispatch = useDispatch()
  const caseFiles = useCaseFiles()

  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDrop = (e) => {
    e.preventDefault()
  }
  const onDragEnd = (e, file) => {
    const payload = {
      ...file,
      position: { x: e.clientX, y: e.clientY },
    }

    dispatch({ type: CASE_FILES_TYPES.MOVE_AROUND_TABLE, payload })
  }

  return (
    <FilesOnTable onDragOver={(e) => onDragOver(e)}>
      {caseFiles.filesOnTable.map((file) => {
        return (
          <DraggableCard
            draggable={true}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e)}
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
    </FilesOnTable>
  )
}

export default MainTable
