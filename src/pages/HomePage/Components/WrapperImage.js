import styled from 'styled-components'
import { Flex } from '../../../components/styled/Flex.styled'
import { Image } from '../../../components/styled/Image.styled'
import { Typography } from '../../../components/styled/Typography.styled'
import { splitSpace } from '../../../_helper/_helper'

const WrapperImageStyled = styled.div`
  cursor: pointer;
`

const SignatureStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
`

const WrapperImage = (props) => {
  const { array } = props

  const handleImage = (id) => {
    //mylog
    console.log(splitSpace(id))
  }
  return (
    <Flex content={'space-between'} pt={20} pb={20}>
      {array.map((item) => {
        return (
          <Flex direction={'column'} width={'auto'} key={item.alt}>
            <WrapperImageStyled
              title={item.alt}
              onClick={() => handleImage(item.alt)}
            >
              <Image imgPath={item.imgPath} />
            </WrapperImageStyled>
            <SignatureStyled>
              <Typography sm>{item.alt}</Typography>
            </SignatureStyled>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default WrapperImage
