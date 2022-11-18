import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { onLogOut } from '../../Store/actions/ActionsUser'
import { CASE_FILES_TYPES } from '../../Store/types'
import DrawerFiles from './Components/DrawerFiles'
import MainTable from './Components/MainTable'

const HomePageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerTimeOpen, setIsDrawerTimeOpen] = useState(false)
  const [file, setFile] = useState({})

  const logout = () => dispatch(onLogOut())

  // <div onClick={logout}>Log Out</div>

  const toggleDrawerTime = () => setIsDrawerTimeOpen((prevState) => !prevState)

  const onDrop = (e) => {
    if (file.id) {
      const payload = {
        ...file,
        position: {
          x: e.pageX - file.position.x,
          y: e.pageY - file.position.y,
        },
      }
      dispatch({ type: CASE_FILES_TYPES.ADD_ON_TABLE, payload })
      setFile('')
    }
  }

  return (
    <>
      <DrawerFiles setFile={setFile} />
      <HomePageStyled
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
      >
        <MainTable />
      </HomePageStyled>
      <Drawer toggle={toggleDrawerTime} isOpen={isDrawerTimeOpen} right>
        <Title title={'Chronology'} />
      </Drawer>
    </>
  )
}
