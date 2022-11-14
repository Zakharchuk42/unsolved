import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { onLogOut } from '../../Store/actions/ActionsUser'

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerFilesopen, setIsDrawerFilesopen] = useState(false)
  const logout = () => dispatch(onLogOut())

  const toggleDrawerFiles = () =>
    setIsDrawerFilesopen((prevState) => !prevState)

  return (
    <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesopen}>
      <Title title={'Documents'} />
    </Drawer>
  )
}

// <div onClick={logout}>Log Out</div>
