import { Button } from '../../../../../components/styled/Button.styled'
import { Card } from '../../../../../components/styled/Card.styled'
import { Flex } from '../../../../../components/styled/Flex.styled'
import Title from '../../../../../components/Title'
import { CustomForm } from '../../../../../components/styled/CustomForm.styled'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomTextarea from '../../../../../components/styled/CustomTextarea'
import { useState } from 'react'
import { NOTE_TYPES } from '../../../../../Store/types'

const Note = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [note, setNote] = useState('')

  const closePopup = () => navigate(-1)

  const addNote = () => {
    const rotate = Math.floor(-4 + Math.random() * (3 + 1 - -4))
    const payload = {
      id: Math.floor(Math.random() * 100000),
      text: note,
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

  return (
    <Card onClick={(e) => e.stopPropagation()}>
      <Flex direction={'column'}>
        <Title title={'Add note'} />
        <CustomForm>
          <CustomTextarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </CustomForm>
        <Flex gap={20} pt={10} content={'flex-end'}>
          <Button pv={'8'} onClick={closePopup}>
            Cancel
          </Button>
          <Button pv={'8'} onClick={addNote}>
            Add
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Note
