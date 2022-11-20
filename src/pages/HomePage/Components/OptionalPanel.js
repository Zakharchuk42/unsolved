import styled, { css } from 'styled-components'

const PanelWrapperStyled = styled.div`
  display: inline-flex;
  gap: 10px;
  padding-bottom: 7px;
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

const IconStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`

const OptionalPanel = (props) => {
  const { isHover, optionalPanel } = props

  return (
    <PanelWrapperStyled isHover={isHover}>
      {optionalPanel.map((item, idx) => {
        const Icon = item.icon
        return (
          <IconStyled onClick={item.callBack} key={idx}>
            <Icon title={item.title} size='18px' color='#DC143C' />
          </IconStyled>
        )
      })}
    </PanelWrapperStyled>
  )
}

export default OptionalPanel
