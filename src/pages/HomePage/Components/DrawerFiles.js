import { Fragment, useState } from 'react'
import { Drawer } from '../../../components/styled/Drawer.styled'
import Title from '../../../components/Title'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { FileInDrawer } from './FileInDrawer'

const DrawerFiles = (props) => {
  const { setFile } = props
  const caseFiles = useCaseFiles()
  const [isDrawerFilesOpen, setIsDrawerFilesOpen] = useState(false)

  const toggleDrawerFiles = () =>
    setIsDrawerFilesOpen((prevState) => !prevState)

  return (
    <Drawer toggle={toggleDrawerFiles} isOpen={isDrawerFilesOpen}>
      {caseFiles.chapter.map((chapter) => {
        return (
          <Fragment key={chapter}>
            <Title title={chapter} color={'#DC143C'} />
            <FileInDrawer
              chapterFiles={caseFiles.caseFiles[chapter]}
              setFile={setFile}
            />
          </Fragment>
        )
      })}
    </Drawer>
  )
}

export default DrawerFiles
