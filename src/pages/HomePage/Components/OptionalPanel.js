import styled from 'styled-components'
import { IoSearchOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { POPUPS } from '../../../const/popup'
import { callPopup } from '../../../_helper/_helper'
import { useNavigate } from 'react-router-dom'

const PanelWrapperStyled = styled.div`
  display: inline-flex;
  gap: 10px;
  padding-bottom: 7px;
`

const IconStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`

const OptionalPanel = (props) => {
  const { file } = props

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const showPopup = () => navigate(callPopup(POPUPS.caseFile), { state: file })

  const removeFile = () =>
    dispatch({ type: CASE_FILES_TYPES.REMOVE_FROM_TABEL, payload: file })

  const toggleBlock = () =>
    dispatch({ type: CASE_FILES_TYPES.TOGGLE_BLOCK_FILE, payload: file.id })

  return (
    <PanelWrapperStyled>
      <IconStyled onClick={showPopup}>
        <IoSearchOutline title={'Show file'} size='18px' color='#DC143C' />
      </IconStyled>
      <IconStyled onClick={removeFile}>
        <IoTrashOutline
          title={'Remove from table'}
          size='18px'
          color='#DC143C'
        />
      </IconStyled>
      <IconStyled onClick={toggleBlock}>
        {file.isBlocked ? (
          <IoLockOpenOutline
            title={'Unlock file'}
            size='18px'
            color='#DC143C'
          />
        ) : (
          <IoLockClosedOutline
            title={'Block file'}
            size='18px'
            color='#DC143C'
          />
        )}
      </IconStyled>
    </PanelWrapperStyled>
  )
}

export default OptionalPanel
