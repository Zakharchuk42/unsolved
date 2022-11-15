import { POPUPS } from '../../../const/popup'
import { useGetPopupState } from './hooks/useGetPopupState'
import { BackDrop } from '../../../components/styled/BackDrop.styled'

import Login from './Popups/LogIn/LogIn'
import Register from './Popups/Register/Register'
import CaseFile from './Popups/CaseFile/CaseFile'

const popups = {
  [POPUPS.register]: Register,
  [POPUPS.logIn]: Login,
  [POPUPS.caseFile]: CaseFile,
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
