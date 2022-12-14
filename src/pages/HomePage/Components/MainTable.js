import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { Flex } from '../../../components/styled/Flex.styled'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { useNotes } from '../../../hooks/useNotes'
import { CASE_FILES_TYPES, ITEM_TYPE, NOTE_TYPES } from '../../../Store/types'
import { splitSpace } from '../../../_helper/_helper'

import FuncPanelOnTable from './FuncPanelOnTable'
import ItemOnTable from './ItemOnTable'

const MainTableStyled = styled.div`
  padding-bottom: 90px;
`

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
  const stateNotes = useNotes()

  const [shift, setShift] = useState({})

  const onDragStart = (e, file) => {
    if (file.isBlocked) return
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setShift({ shiftX, shiftY })
  }

  const onDragEnd = (e, file, type) => {
    if (file.isBlocked) return
    const payload = {
      ...file,
      position: { x: e.pageX - shift.shiftX, y: e.pageY - shift.shiftY },
    }
    dispatch({ type, payload })
    setShift({})
  }

  return (
    <>
      <MainTableStyled>
        <Flex gap={20}>
          {caseFiles.filesOnTable.map((file) => {
            return (
              <DraggableCardStyled
                key={splitSpace(file.alt)}
                onDragStart={(e) => onDragStart(e, file)}
                onDragEnd={(e) =>
                  onDragEnd(e, file, CASE_FILES_TYPES.MOVE_AROUND_TABLE)
                }
                position={file.position}
              >
                <ItemOnTable item={file} type={ITEM_TYPE.FILE} />
              </DraggableCardStyled>
            )
          })}
        </Flex>
        <Flex gap={20}>
          {stateNotes.map((note) => {
            return (
              <DraggableCardStyled
                key={note.id}
                onDragStart={(e) => onDragStart(e, note)}
                onDragEnd={(e) =>
                  onDragEnd(e, note, NOTE_TYPES.MOVE_AROUND_TABLE)
                }
                position={note.position}
                draggable={true}
              >
                <ItemOnTable item={note} type={ITEM_TYPE.NOTE} />
              </DraggableCardStyled>
            )
          })}
        </Flex>
      </MainTableStyled>
      <FuncPanelOnTable />
    </>
  )
}

export default MainTable
