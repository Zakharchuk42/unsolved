import React from 'react'
import { Card } from '../../../../../components/styled/Card.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { CustomInput } from '../../../../../components/styled/CustomInput.styled'
import { Typography } from '../../../../../components/styled/Typography.styled'
import { Buttom } from '../../../../../components/styled/Button.styled'

const LogIn = () => {
  const register = () => console.log('reg')
  const logIn = () => console.log('log')

  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Typography transform={'uppercase'} opacity={50}>
          Login
        </Typography>
        <CustomForm>
          <CustomInput placeholder={'name'} />
          <CustomInput placeholder={'password'} />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Buttom pv={'8'} onClick={register}>
            Register
          </Buttom>
          <Buttom pv={'8'} onClick={logIn}>
            Log In
          </Buttom>
        </Flex>
      </Flex>
    </Card>
  )
}

export default LogIn
