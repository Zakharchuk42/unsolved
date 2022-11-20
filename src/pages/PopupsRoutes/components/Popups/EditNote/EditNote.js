import { Button } from '../../../../../components/styled/Button.styled'
import { Card } from '../../../../../components/styled/Card.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import Title from '../../../../../components/Title'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomTextarea from '../../../../../components/styled/CustomTextarea'
import { useState } from 'react'
import { NOTE_TYPES } from '../../../../../Store/types'

const EditNote = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  let isEdit = !!location.state

  const [text, setText] = useState(location.state?.text || '')

  const closePopup = () => navigate(-1)

  const addNote = () => {
    const rotate = Math.floor(-4 + Math.random() * (3 + 1 - -4))
    const payload = {
      id: Math.floor(Math.random() * 100000),
      text,
      position: {
        x: '',
        y: '',
        rotate,
      },
      isBlocked: false,
    }

    dispatch({ type: NOTE_TYPES.ADD, payload })
    closePopup()
  }

  const editNote = () => {
    const payload = {
      ...location.state,
      text,
    }

    dispatch({ type: NOTE_TYPES.EDIT, payload })
    closePopup()
  }

  const title = isEdit ? 'Edit note' : 'Add note'
  const handler = isEdit ? editNote : addNote
  const button = isEdit ? 'Edit' : 'Add'

  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Title title={title} />
        <CustomForm>
          <CustomTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Button pv={'8'} onClick={closePopup}>
            Cancel
          </Button>
          <Button pv={'8'} onClick={handler}>
            {button}
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default EditNote
