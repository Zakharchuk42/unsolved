import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { CHAPTER_FILES, CHAPTERS_NAMES } from '../../const/const'
import { onLogOut } from '../../Store/actions/ActionsUser'
import Files from './Components/Files'

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerFilesOpen, setIsDrawerFilesOpen] = useState(false)
  const [isDrawerTimeOpen, setIsDrawerTimeOpen] = useState(false)
  const chaptersNames = CHAPTERS_NAMES
  const chapterFiles = CHAPTER_FILES
  const logout = () => dispatch(onLogOut())

  // <div onClick={logout}>Log Out</div>
  const toggleDrawerFiles = () =>
    setIsDrawerFilesOpen((prevState) => !prevState)

  const toggleDrawerTime = () => setIsDrawerTimeOpen((prevState) => !prevState)

  return (
    <>
      <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesOpen}>
        {chaptersNames.map((chapter) => {
          return (
            <Fragment key={chapter}>
              <Title title={chapter} color={'#DC143C'} />
              <Files chapterFiles={chapterFiles[chapter]} />
            </Fragment>
          )
        })}
      </Drawer>

      <Drawer toggle={toggleDrawerTime} isOpen={isDrawerTimeOpen} right>
        <Title title={'Time'} />
      </Drawer>
    </>
  )
}
