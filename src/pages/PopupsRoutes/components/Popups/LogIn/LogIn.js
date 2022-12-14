import React, { useState } from 'react'
import { Card } from '../../../../../components/styled/Card.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { CustomInput } from '../../../../../components/styled/CustomInput.styled'
import { Button } from '../../../../../components/styled/Button.styled'
import { useDispatch } from 'react-redux'
import { onLogin } from '../../../../../Store/actions/ActionsUser'
import Title from '../../../../../components/Title'
import { splitSpace } from '../../../../../_helper/_helper'

const LogIn = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const logIn = () => {
    const payload = {
      email: `${splitSpace(name)}@gmail.com`,
      password,
    }
    dispatch(onLogin(payload))
    setName('')
    setPassword('')
  }

  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Title title={'Login'} />
        <CustomForm>
          <CustomInput
            placeholder={'name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            placeholder={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Button pv={'8'} onClick={logIn}>
            Log In
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default LogIn
