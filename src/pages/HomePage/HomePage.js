import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { onLogOut } from '../../Store/actions/ActionsUser'

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerFilesOpen, setIsDrawerFilesOpen] = useState(false)
  const [isDrawerTimeOpen, setIsDrawerTimeOpen] = useState(false)
  const logout = () => dispatch(onLogOut())

  const toggleDrawerFiles = () =>
    setIsDrawerFilesOpen((prevState) => !prevState)

  const toggleDrawerTime = () => setIsDrawerTimeOpen((prevState) => !prevState)

  return (
    <>
      <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesOpen}>
        <Title title={'Victim'} />
        <Title title={'Suspects'} />
        <Title title={'Testimony'} />
        <Title title={'Evidence'} />
      </Drawer>

      <Drawer toggle={toggleDrawerTime} isOpen={isDrawerTimeOpen} right>
        <Title title={'Time'} />
      </Drawer>
    </>
  )
}

// <div onClick={logout}>Log Out</div>
