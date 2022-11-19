import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { splitSpace } from '../../../_helper/_helper'

import FileOnTable from './FileOnTable'

const DraggableCardStyled = styled.div`
  ${({ position }) =>
    position.x &&
    css`
      position: absolute;
      left: ${position.x}px;
      top: ${position.y}px;
    `}
`

const MainTable = () => {
  const dispatch = useDispatch()
  const caseFiles = useCaseFiles()

  const [shift, setShift] = useState({})

  const onDragStart = (e, file) => {
    if (file.isBlocked) return
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e, file) => {
    if (file.isBlocked) return
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
          <DraggableCardStyled
            key={splitSpace(file.alt)}
            onDragStart={(e) => onDragStart(e, file)}
            onDragEnd={(e) => onDragEnd(e, file)}
            position={file.position}
          >
            <FileOnTable file={file} />
          </DraggableCardStyled>
        )
      })}
    </>
  )
}

export default MainTable
