import styled from 'styled-components'
import { IoSearchOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { CASE_FILES_TYPES } from '../../../Store/types'
import { POPUPS } from '../../../const/popup'
import { callPopup } from '../../../_helper/_helper'
import { useNavigate, useSearchParams } from 'react-router-dom'

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

  return (
    <PanelWrapperStyled>
      <IconStyled to={'?popup'}>
        <IoSearchOutline
          title={'Show file'}
          size='18px'
          color='#DC143C'
          onClick={showPopup}
        />
      </IconStyled>
      <IconStyled>
        <IoTrashOutline
          title={'Remove from table'}
          size='18px'
          color='#DC143C'
          onClick={removeFile}
        />
      </IconStyled>
      {file.isBlocked ? (
        <IconStyled>
          <IoLockOpenOutline
            title={'Lock file'}
            size='18px'
            color='#DC143C'
            onClick={() => console.log('Lock file')}
          />
        </IconStyled>
      ) : (
        <IconStyled>
          <IoLockClosedOutline
            title={'Unlock file'}
            size='18px'
            color='#DC143C'
            onClick={() => console.log('Unlock file')}
          />
        </IconStyled>
      )}
    </PanelWrapperStyled>
  )
}

export default OptionalPanel
