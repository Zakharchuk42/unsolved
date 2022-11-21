import { useState } from 'react'
import styled from 'styled-components'
import { Note } from '../../../components/styled/Note.styled'
import { imgSrc } from '../../../const/const'
import OptionalPanel from './OptionalPanel'
import { useNavigate } from 'react-router-dom'
import { callPopup } from '../../../_helper/_helper'
import { POPUPS } from '../../../const/popup'
import { IoSearchOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoTrashOutline } from 'react-icons/io5'
import { IoLockOpenOutline } from 'react-icons/io5'
import { IoPencil } from 'react-icons/io5'
import { CASE_FILES_TYPES, ITEM_TYPE, NOTE_TYPES } from '../../../Store/types'
import { useDispatch } from 'react-redux'

const WrapperStyled = styled.div`
  position: relative;
  cursor: grab;
  z-index: 2;
`

const ImagePinStyled = styled.img`
  z-index: 1;
  position: absolute;
  right: 40%;
  top: -5px;
`

const ImageStyled = styled.img`
  width: 210px;
  height: auto;
  filter: drop-shadow(${({ theme }) => theme.shadow});
`

const IconStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
`

const ItemOnTable = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isHover, setIsHover] = useState(false)

  const { item, type } = props

  const openPopup = (path) => navigate(callPopup(path), { state: item })

  const callBack = (type) => dispatch({ type, payload: item })

  const optionalPanel = {
    [ITEM_TYPE.FILE]: [
      {
        icon: IoSearchOutline,
        callBack: () => openPopup(POPUPS.caseFile),
        title: 'Show file',
      },
      {
        icon: IoTrashOutline,
        callBack: () => callBack(CASE_FILES_TYPES.REMOVE_FROM_TABEL),
        title: 'Remove from table',
      },
      {
        icon: item.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
        callBack: () => callBack(CASE_FILES_TYPES.TOGGLE_BLOCK_FILE),
        title: item.isBlocked ? 'Block file' : 'Unlock file',
      },
    ],
    [ITEM_TYPE.NOTE]: [
      {
        icon: IoSearchOutline,
        callBack: () => openPopup(POPUPS.note),
        title: 'Show note',
      },
      {
        icon: IoTrashOutline,
        callBack: () => callBack(NOTE_TYPES.REMOVE),
        title: 'Remove from table',
      },
      {
        icon: item.isBlocked ? IoLockOpenOutline : IoLockClosedOutline,
        callBack: () => callBack(NOTE_TYPES.TOGGLE_BLOCK_NOTE),
        title: item.isBlocked ? 'Block note' : 'Unlock note',
      },
      {
        icon: IoPencil,
        callBack: () => openPopup(POPUPS.editNote),
        title: 'Edit note',
      },
    ],
  }

  const renderItem = () => {
    switch (type) {
      case 'file': {
        return <ImageStyled src={`${imgSrc + item.imgPath}`} title={item.alt} />
      }
      case 'note': {
        return (
          <>
            <ImagePinStyled src={`${imgSrc}/images/pin.png`} />
            <Note position={item.position} {...props}>
              {item.text}
            </Note>
          </>
        )
      }
      default:
        return null
    }
  }

  return (
    <WrapperStyled
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <OptionalPanel isHover={isHover} optionalPanel={optionalPanel[type]} />
      {renderItem()}
      {item.isBlocked && (
        <IconStyled>
          <IoLockClosedOutline
            title={'File is block!'}
            size='16px'
            color='#DC143C'
          />
        </IconStyled>
      )}
    </WrapperStyled>
  )
}

export default ItemOnTable
