import styled from 'styled-components'

const TypographyStyled = styled.p`
  color: ${({ color, theme }) => color || theme.colors.white};
  opacity: ${({ opacity }) => opacity || '100'}%;
  line-height: 26px;
  text-transform: ${({ transform }) => transform || 'inherit'};
  ${(props) => {
    switch (true) {
      case props.xl:
        return `
        font-size: ${props.theme.typography.size.xl};
        font-weight: ${props.theme.typography.weight.bold}
      `
      case props.lg:
        return `
        font-size: ${props.theme.typography.size.lg};
        font-weight: ${props.theme.typography.weight.semi}
      `
      case props.sm:
        return `
        font-size: ${props.theme.typography.size.sm};
        font-weight: ${props.theme.typography.weight.thin}
      `
      case props.btn:
        return `
        font-size: ${props.theme.typography.size.body};
        font-weight: ${props.theme.typography.weight.semi}
      `
      default:
        return `
        font-size: ${props.theme.typography.size.body};
        font-weight: ${props.theme.typography.weight.reg}
      `
    }
  }};
`

export const Typography = (props) => <TypographyStyled {...props} />
