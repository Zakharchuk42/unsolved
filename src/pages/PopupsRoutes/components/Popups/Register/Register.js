import { Button } from '../../../../../components/styled/Button.styled'
import { Card } from '../../../../../components/styled/Card.styled'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { CustomInput } from '../../../../../components/styled/CustomInput.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import { Typography } from '../../../../../components/styled/Typography.styled'

const Register = () => {
  const register = () => console.log('register')
  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Typography transform={'uppercase'} opacity={50}>
          Register
        </Typography>
        <CustomForm>
          <CustomInput placeholder={'name'} />
          <CustomInput placeholder={'password'} />
          <CustomInput placeholder={'re-password'} />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Button pv={'8'} onClick={register}>
            Register
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Register
