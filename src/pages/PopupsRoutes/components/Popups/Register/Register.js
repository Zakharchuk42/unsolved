import { useState } from 'react'
import { Button } from '../../../../../components/styled/Button.styled'
import { Card } from '../../../../../components/styled/Card.styled'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { CustomInput } from '../../../../../components/styled/CustomInput.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import { Typography } from '../../../../../components/styled/Typography.styled'
import { useDispatch } from 'react-redux'
import { onRegister } from '../../../../../Store/actions/ActionsUser'
import Title from '../../../../../components/Title'

const Register = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const register = () => {
    if (password !== rePassword) {
      return false
    }
    const payload = {
      email: `${name.replace(/\s/g, '')}@gmail.com`,
      password,
    }
    dispatch(onRegister(payload))
    setName('')
    setPassword('')
    setRePassword('')
  }

  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Title title={'Register'} />
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
          <CustomInput
            placeholder={'re-password'}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Button pv={'8'} onClick={register} type={'submit'}>
            Register
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Register
