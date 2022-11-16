import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { imgSrc } from '../../../const/const'
import { POPUPS } from '../../../const/popup'
import { useCaseFiles } from '../../../hooks/useCaseFiles'
import { callPopup, splitSpace } from '../../../_helper/_helper'

const FilesOnTable = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const LinkWrapperStyled = styled(Link)`
  cursor: pointer;
`

const ImageStyled = styled.img`
  width: 140px;
  height: auto;
`

const MainTable = () => {
  const caseFiles = useCaseFiles()

  return (
    <FilesOnTable>
      {caseFiles.filesOnTable.map((file) => {
        return (
          <LinkWrapperStyled
            key={splitSpace(file.alt)}
            title={file.alt}
            to={callPopup(POPUPS.caseFile)}
            state={file}
          >
            <ImageStyled src={`${imgSrc + file.imgPath}`} title={file.alt} />
          </LinkWrapperStyled>
        )
      })}
    </FilesOnTable>
  )
}

export default MainTable
