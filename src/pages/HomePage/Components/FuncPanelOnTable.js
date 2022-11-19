import styled from 'styled-components'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { CASE_FILES_TYPES } from '../../../Store/types'

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

  const removeAllFiles = () =>
    dispatch({ type: CASE_FILES_TYPES.REMOVE_ALL_FROM_TABEL, payload: '' })
  const blockAll = () =>
    dispatch({ type: CASE_FILES_TYPES.BLOCK_ALL, payload: '' })
  const unblockAll = () =>
    dispatch({ type: CASE_FILES_TYPES.UNBLOCK_ALL, payload: '' })

  return (
    <FuncPanelStyled>
      <IoCreateOutline title={'Add notice'} size='36px' color='#DC143C' />
      <IoTrashOutline
        title={'Remove all files'}
        size='36px'
        color='#DC143C'
        onClick={removeAllFiles}
      />
      <IoLockClosedOutline
        title={'Block all files'}
        size='36px'
        color='#DC143C'
        onClick={blockAll}
      />
      <IoLockOpenOutline
        title={'Unlock all files'}
        size='36px'
        color='#DC143C'
        onClick={unblockAll}
      />
    </FuncPanelStyled>
  )
}

export default FuncPanelOnTable
