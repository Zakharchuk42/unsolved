import { Flex } from './styled/Flex.styled'
import { Line } from './styled/Line.styled'
import { Typography } from './styled/Typography.styled'

const Title = ({ title, color }) => {
  return (
    <Flex align={'center'} gap={25}>
      <Line color={color} />
      <Typography transform={'uppercase'} opacity={90} btn color={color}>
        {title}
      </Typography>
    </Flex>
  )
}

export default Title
