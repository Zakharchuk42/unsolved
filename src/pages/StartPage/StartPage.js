import styled from 'styled-components'
import { theme } from '../../const/variables'
import { Typography } from '../../components/styled/Typography.styled'
import { Flex } from '../../components/styled/Flex.styled'
import { imgSrc } from '../../const/imgSrc'
import { CustomLink } from '../../components/styled/CustomLink.styled'

const ImageBlock = styled.div`
  display: flex;
  width: 100%;
  background: url('../images/home-bg.jpg') center;
  padding: 65px;
  background-size: cover;
  justify-content: flex-end;
  flex-direction: column;
`

const Title = styled.p`
  color: ${theme.colors.red};
  font-weight: ${theme.typography.weight.bold};
  text-transform: uppercase;
  font-size: 80px;
  padding-bottom: 10px;
`

const PaperImage = styled.img`
  position: absolute;
  height: 95%;
  right: -90%;
  cursor: pointer;
  box-shadow: ${theme.shadow};
  transition: all 0.5s ease;

  &:hover {
    right: 0;
  }
`

export const StartPage = () => {
  return (
    <>
      <ImageBlock>
        <Title>Unsolved Case</Title>
        <Flex content={'space-between'} align={'center'} gap={20}>
          <Flex maxWidth={'550px'}>
            <Typography opacity={'75'}>
              Unsolved Case is a game that lets you solve a fictional crime
              using the evidence and documentation from the cold case file.
            </Typography>
          </Flex>
          <Flex gap={20} width={'auto'}>
            <CustomLink to={'?popup=register'}>Register</CustomLink>
            <CustomLink to={'?popup=log-in'}>Log In</CustomLink>
          </Flex>
        </Flex>
      </ImageBlock>
      <Flex
        maxWidth={'280px'}
        width={'100%'}
        align={'center'}
        position={'relative'}
      >
        <PaperImage src={`${imgSrc}/images/newspaper.png`} />
      </Flex>
    </>
  )
}
