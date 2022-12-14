import styled, { css } from 'styled-components'
import { Flex } from '../../../components/styled/Flex.styled'
import { callPopup } from '../../../_helper/_helper'
import { Link } from 'react-router-dom'
import { POPUPS } from '../../../const/popup'
import { imgSrc } from '../../../const/const'

const LinkWrapperStyled = styled(Link)`
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #f8f7f9;

  &:hover {
    color: #dc143c;
  }
`

const SignatureStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 100;
`
const DisabledBlockStyled = styled.div`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.2;
    `}
`

const ImageStyled = styled.img`
  width: 98px;
  height: 126px;
  object-fit: cover;
`

const FileInDrawerComponent = (props) => {
  const { chapterFiles, setFile } = props

  const onDragStart = (e, file) => {
    const shiftX = e.clientX - e.target.getBoundingClientRect().left
    const shiftY = e.clientY - e.target.getBoundingClientRect().top
    setFile({
      ...file,
      position: {
        x: shiftX,
        y: shiftY,
      },
    })
  }
  return (
    <Flex content={'space-around'} pt={20} pb={20}>
      {chapterFiles.map((file) => {
        return (
          <DisabledBlockStyled
            key={file.alt}
            isDisabled={file.isOnTable}
            draggable={true}
            onDragStart={(e) => onDragStart(e, file)}
          >
            <Flex direction={'column'} width={'auto'}>
              <LinkWrapperStyled
                title={file.alt}
                to={callPopup(POPUPS.caseFile)}
                state={file}
              >
                <ImageStyled src={`${imgSrc + file.imgPath}`} />
                <SignatureStyled>{file.alt}</SignatureStyled>
              </LinkWrapperStyled>
            </Flex>
          </DisabledBlockStyled>
        )
      })}
    </Flex>
  )
}

export const FileInDrawer = FileInDrawerComponent
