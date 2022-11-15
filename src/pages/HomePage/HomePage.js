import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { EVIDENCE, SUSPECTS, TESTIMONY, VICTIM } from '../../const/const'
import { onLogOut } from '../../Store/actions/ActionsUser'
import WrapperImage from './Components/WrapperImage'

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerFilesOpen, setIsDrawerFilesOpen] = useState(false)
  const [isDrawerTimeOpen, setIsDrawerTimeOpen] = useState(false)
  const logout = () => dispatch(onLogOut())

  // <div onClick={logout}>Log Out</div>
  const toggleDrawerFiles = () =>
    setIsDrawerFilesOpen((prevState) => !prevState)

  const toggleDrawerTime = () => setIsDrawerTimeOpen((prevState) => !prevState)

  return (
    <>
      <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesOpen}>
        <Title title={'Victim'} color={'#DC143C'} />
        <WrapperImage array={VICTIM} />
        <Title title={'Suspects'} color={'#DC143C'} />
        <WrapperImage array={SUSPECTS} />
        <Title title={'Testimony'} color={'#DC143C'} />
        <WrapperImage array={TESTIMONY} />
        <Title title={'Evidence'} color={'#DC143C'} />
        <WrapperImage array={EVIDENCE} />
      </Drawer>

      <Drawer toggle={toggleDrawerTime} isOpen={isDrawerTimeOpen} right>
        <Title title={'Time'} />
      </Drawer>
    </>
  )
}
