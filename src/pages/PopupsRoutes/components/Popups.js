import { GET_ENUMS } from '../../../const/popup'
import { useGetPopupState } from './hooks/useGetPopupState'
import { BackDrop } from '../../../components/styled/BackDrop.styled'

import Login from './Popups/LogIn/LogIn'
import Register from './Popups/Register/Register'

const popups = {
  [GET_ENUMS.popups.register]: Register,
  [GET_ENUMS.popups.logIn]: Login,
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
