import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Drawer } from '../../components/styled/Drawer.styled'
import Title from '../../components/Title'
import { useCaseFiles } from '../../hooks/useCaseFiles'
import { onLogOut } from '../../Store/actions/ActionsUser'
import Files from './Components/Files'

export const HomePage = () => {
  const dispatch = useDispatch()

  const [isDrawerFilesOpen, setIsDrawerFilesOpen] = useState(false)
  const [isDrawerTimeOpen, setIsDrawerTimeOpen] = useState(false)

  const caseFiles = useCaseFiles()

  const logout = () => dispatch(onLogOut())

  // <div onClick={logout}>Log Out</div>
  const toggleDrawerFiles = () =>
    setIsDrawerFilesOpen((prevState) => !prevState)

  const toggleDrawerTime = () => setIsDrawerTimeOpen((prevState) => !prevState)

  return (
    <>
      <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesOpen}>
        {caseFiles.chapter.map((chapter) => {
          return (
            <Fragment key={chapter}>
              <Title title={chapter} color={'#DC143C'} />
              <Files chapterFiles={caseFiles.caseFiles[chapter]} />
            </Fragment>
          )
        })}
      </Drawer>

      <Drawer toggle={toggleDrawerTime} isOpen={isDrawerTimeOpen} right>
        <Title title={'Chronology'} />
      </Drawer>
    </>
  )
}
