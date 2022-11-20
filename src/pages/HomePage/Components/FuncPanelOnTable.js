import styled from 'styled-components'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { IoPinOutline } from 'react-icons/io5'
import { IoInformationSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { POPUPS } from '../../../const/popup'
import { callPopup } from '../../../_helper/_helper'
import { useNavigate } from 'react-router-dom'

const FuncPanelStyled = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  background: ${({ theme }) => theme.colors.black};
  gap: 20px;

  svg {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const FuncPanelOnTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addNote = () => navigate(callPopup(POPUPS.note))
  const removeAllFiles = () =>
    dispatch({ type: CASE_FILES_TYPES.REMOVE_ALL_FROM_TABEL })
  const blockAll = () => dispatch({ type: CASE_FILES_TYPES.BLOCK_ALL })
  const unblockAll = () => dispatch({ type: CASE_FILES_TYPES.UNBLOCK_ALL })

  return (
    <FuncPanelStyled>
      <IoCreateOutline
        title={'Add note'}
        size='34px'
        color='#DC143C'
        onClick={addNote}
      />
      <IoTrashOutline
        title={'Remove all files'}
        size='34px'
        color='#DC143C'
        onClick={removeAllFiles}
      />
      <IoLockClosedOutline
        title={'Block all files'}
        size='32px'
        color='#DC143C'
        onClick={blockAll}
      />
      <IoLockOpenOutline
        title={'Unlock all files'}
        size='32px'
        color='#DC143C'
        onClick={unblockAll}
      />
      <IoPinOutline
        title={'Шось вигадать'}
        size='32px'
        color='#DC143C'
        onClick={() => console.log('Bylavka')}
      />
      <IoInformationSharp
        title={'Open instruction'}
        size='38px'
        color='#DC143C'
        onClick={() => console.log('Open instr')}
      />
    </FuncPanelStyled>
  )
}

export default FuncPanelOnTable
