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
    default:
      return state
  }
}
