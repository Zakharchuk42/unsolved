import styled from 'styled-components'
import { Flex } from './Flex.styled'
import { IoChevronBack } from 'react-icons/io5'

const DrawerStyled = styled.div`
  position: absolute;
  width: 350px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  padding: 20px;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-95%')});
  transition: all 0.3s ease;
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
  transform: translate(99%, 0);

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '0' : '180')}deg);
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(${({ isOpen }) => (isOpen ? '0' : '180')}deg) scale(1.2);
    }
  }
`

export const Drawer = (props) => {
  const { children, toggle, isOpen } = props
  //mylog
  console.log(isOpen)
  return (
    <DrawerStyled {...props}>
      <ButtonStyled onClick={toggle} isOpen={isOpen}>
        <IoChevronBack size='36px' color='#DC143C' />
      </ButtonStyled>
      <Flex position={'relative'}>{children}</Flex>
    </DrawerStyled>
  )
}
