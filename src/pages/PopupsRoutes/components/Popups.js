import { POPUPS } from '../../../const/popup'
import { useGetPopupState } from './hooks/useGetPopupState'
import { BackDrop } from '../../../components/styled/BackDrop.styled'

import Login from './Popups/LogIn/LogIn'
import Register from './Popups/Register/Register'
import CaseFile from './Popups/CaseFile/CaseFile'
import EditNote from './Popups/EditNote/EditNote'
import NotePopup from './Popups/NotePopup/NotePopup'

const popups = {
  [POPUPS.register]: Register,
  [POPUPS.logIn]: Login,
  [POPUPS.caseFile]: CaseFile,
  [POPUPS.editNote]: EditNote,
  [POPUPS.note]: NotePopup,
}

const GetParameterPopups = () => {
  const { mountedPopup, isOpened } = useGetPopupState()
  const Component = popups[mountedPopup]

  if (!Component) {
    return null
  }

  return (
    <BackDrop isOpened={isOpened}>
      <Component />
    </BackDrop>
  )
}

export default GetParameterPopups
