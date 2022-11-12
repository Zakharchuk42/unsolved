import styled from 'styled-components'

const FlexStyled = styled.div`
  display: flex;
  gap: ${({ gap }) => gap || '0'}px;
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  position: ${({ position }) => position || 'static'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ content }) => content || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  padding-left: ${({ pl }) => pl || '0'}px;
  padding-right: ${({ pr }) => pr || '0'}px;
  padding-top: ${({ pt }) => pt || '0'}px;
  padding-bottom: ${({ pb }) => pb || '0'}px;
`

export const Flex = (props) => <FlexStyled {...props} />
