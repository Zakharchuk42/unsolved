import { NOTE_TYPES } from '../types'

const INITIAL_STATE = {
  notes: [],
}

export const ReducerNotes = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case NOTE_TYPES.ADD: {
      const newNotes = [...state.notes, payload]

      return { notes: newNotes }
    }

    case NOTE_TYPES.MOVE_AROUND_TABLE: {
      const copyNotes = [...state.notes]

      const newNotes = copyNotes.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            position: {
              ...item.position,
              x: payload.position.x,
              y: payload.position.y,
            },
          }
        }
        return item
      })

      return {
        notes: newNotes,
      }
    }
    default:
      return state
  }
}
