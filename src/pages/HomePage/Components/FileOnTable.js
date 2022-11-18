import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { imgSrc } from '../../../const/const'
import { POPUPS } from '../../../const/popup'
import { callPopup } from '../../../_helper/_helper'
import OptionalPanel from './OptionalPanel'

const OptionalPanelWrapper = styled.div`
  opacity: 0;
  transition: all 0.3s ease;
  position: absolute;
  transform: translateY(0);
  visibility: hidden;

  ${({ isHover }) =>
    isHover &&
    css`
      transform: translateY(-100%);
      opacity: 1;
      visibility: visible;
    `}
`

const LinkWrapperStyled = styled(Link)`
  cursor: grab;
`

const ImageStyled = styled.img`
  width: 210px;
  height: auto;
`
const Test = (props) => {
  const { file } = props

  const [isHover, setIsHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <OptionalPanelWrapper isHover={isHover}>
        <OptionalPanel file={file} />
      </OptionalPanelWrapper>
      <LinkWrapperStyled
        title={file.alt}
        to={callPopup(POPUPS.caseFile)}
        state={file}
      >
        <ImageStyled src={`${imgSrc + file.imgPath}`} title={file.alt} />
      </LinkWrapperStyled>
    </div>
  )
}

export default Test
