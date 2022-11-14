import { Flex } from './styled/Flex.styled'
import { Line } from './styled/Line.styled'
import { Typography } from './styled/Typography.styled'

const Title = ({ title }) => {
  return (
    <Flex align={'center'} gap={25}>
      <Line />
      <Typography transform={'uppercase'} opacity={50}>
        {title}
      </Typography>
    </Flex>
  )
}

export default Title
