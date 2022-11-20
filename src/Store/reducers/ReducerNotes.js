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
    case NOTE_TYPES.EDIT: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.map((item) => {
        if (item.id === payload.id) {
          //mylog
          console.log(item)
          return { ...item, text: payload.text }
        }
        return item
      })

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
    case NOTE_TYPES.REMOVE: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.filter((item) => item.id !== payload.id)
      return { notes: newNotes }
    }
    case NOTE_TYPES.TOGGLE_BLOCK_NOTE: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.map((item) => {
        if (item.id === payload.id) {
          return { ...item, isBlocked: !item.isBlocked }
        }
        return item
      })
      return { notes: newNotes }
    }
    case NOTE_TYPES.BLOCK_ALL: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.map((item) => {
        return { ...item, isBlocked: true }
      })

      return { notes: newNotes }
    }
    case NOTE_TYPES.UNBLOCK_ALL: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.map((item) => {
        return { ...item, isBlocked: false }
      })

      return { notes: newNotes }
    }
    case NOTE_TYPES.REMOVE_ALL: {
      const copyNotes = [...state.notes]
      const newNotes = copyNotes.filter((item) => item.isBlocked)
      return { notes: newNotes }
    }
    default:
      return state
  }
}
