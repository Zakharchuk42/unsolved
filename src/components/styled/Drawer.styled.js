import styled, { css } from 'styled-components'
import { Flex } from './Flex.styled'
import { IoChevronBack } from 'react-icons/io5'

const DrawerStyled = styled.div`
  position: absolute;
  width: 420px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  padding: 20px;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-96%')});
  transition: all 0.3s ease;

  ${({ right }) =>
    right &&
    css`
      transform: translateX(${({ isOpen }) => (isOpen ? '0' : '96%')});
      right: 0;
    `}
`
const ButtonStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.black};
  top: 10px;
  right: 0;
  transform: translate(98%, 0);

  ${({ right }) =>
    right &&
    css`
      right: 100%;
      transform: translate(2%, 0) scaleX(-1);
    `}

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '0' : '180')}deg);
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(${({ isOpen }) => (isOpen ? '0' : '180')}deg) scale(1.2);
    }
  }
`

export const Drawer = (props) => {
  const { children, toggle, isOpen, right } = props
  return (
    <DrawerStyled {...props}>
      <ButtonStyled onClick={toggle} isOpen={isOpen} right={right}>
        <IoChevronBack size='36px' color='#DC143C' />
      </ButtonStyled>
      <Flex position={'relative'}>{children}</Flex>
    </DrawerStyled>
  )
}
