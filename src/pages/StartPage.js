import styled from 'styled-components'
import { theme } from '../_helpers/variables'
import { Typography } from '../components/styled/Typography.styled'
import { Flex } from '../components/styled/Flex.styled'
import { imgSrc } from '../_helpers/imgSrc'
import { Button } from '../components/styled/Button.styled'

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
  const registerPopup = () => {
    console.log('reg')
  }

  const loginPopup = () => {
    console.log('log')
  }

  return (
    <>
      <ImageBlock>
        <Title>Unsolved Case</Title>
        <Flex content={'space-between'} align={'center'}>
          <Flex maxWidth={'550px'}>
            <Typography opacity={'75'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography>
          </Flex>
          <Flex gap={20}>
            <Button onClick={registerPopup}>Register</Button>
            <Button onClick={loginPopup}>Log In</Button>
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
