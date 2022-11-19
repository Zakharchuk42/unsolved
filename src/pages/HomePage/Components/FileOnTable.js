import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { imgSrc } from '../../../const/const'
import { POPUPS } from '../../../const/popup'
import { callPopup } from '../../../_helper/_helper'
import OptionalPanel from './OptionalPanel'
import { IoLockClosedOutline } from 'react-icons/io5'

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
const IconStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
`

const ImageStyled = styled.img`
  width: 210px;
  height: auto;
  filter: drop-shadow(${({ theme }) => theme.shadow});
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
      {file.isBlocked && (
        <IconStyled>
          <IoLockClosedOutline
            title={'File is block!'}
            size='16px'
            color='#DC143C'
          />
        </IconStyled>
      )}
    </div>
  )
}

export default Test
