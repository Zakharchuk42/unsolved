import styled, { css } from 'styled-components'
import { Flex } from '../../../components/styled/Flex.styled'
import { Image } from '../../../components/styled/Image.styled'
import { callPopup, splitSpace } from '../../../_helper/_helper'
import { Link } from 'react-router-dom'
import { POPUPS } from '../../../const/popup'

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
const DisabledBlock = styled.div`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.2;
    `}
`

const Files = (props) => {
  const { chapterFiles } = props
  return (
    <Flex content={'space-around'} pt={20} pb={20}>
      {chapterFiles.map((item) => {
        return (
          <DisabledBlock key={item.alt} isDisabled={item.isOnTable}>
            <Flex direction={'column'} width={'auto'}>
              <LinkWrapperStyled
                title={item.alt}
                to={callPopup(POPUPS.caseFile)}
                state={item}
              >
                <Image imgPath={item.imgPath} />
                <SignatureStyled>{item.alt}</SignatureStyled>
              </LinkWrapperStyled>
            </Flex>
          </DisabledBlock>
        )
      })}
    </Flex>
  )
}

export default Files