import { CASE_FILES_TYPES } from '../types'

const INITIAL_STATE = {
  chapter: ['Victim', 'Suspects', 'Testimony', 'Evidence'],
  caseFiles: {
    Victim: [
      {
        id: 1,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/victim/newspaper.png',
        alt: 'Newspaper',
        chapter: 'Victim',
      },
      {
        id: 2,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/victim/JackLumberski.jpg',
        alt: 'Jack Lumberski',
        chapter: 'Victim',
      },
      {
        id: 3,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/victim/CrimeScene.jpg',
        alt: 'Crime scene',
        chapter: 'Victim',
      },
    ],
    Suspects: [
      {
        id: 4,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/suspects/JerryAndersen.png',
        alt: 'Jerry Andersen',
        chapter: 'Suspects',
      },
      {
        id: 5,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/suspects/MartinPark.png',
        alt: 'Martin Park',
        chapter: 'Suspects',
      },
      {
        id: 6,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/suspects/SamWilliams.png',
        alt: 'Sam Williams',
        chapter: 'Suspects',
      },
    ],
    Testimony: [
      {
        id: 7,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/testimony/JerryAndersen.jpg',
        alt: 'Andersen`s form',
        chapter: 'Testimony',
      },
      {
        id: 8,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/testimony/MartinPark.jpg',
        alt: 'Park`s form',
        chapter: 'Testimony',
      },
      {
        id: 9,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/testimony/SamWilliams.jpg',
        alt: 'Williams`es form',
        chapter: 'Testimony',
      },
    ],
    Evidence: [
      {
        id: 10,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/evidence/call911.jpg',
        alt: 'Call 911',
        chapter: 'Evidence',
      },
      {
        id: 11,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/evidence/letter.jpg',
        alt: 'Letter',
        chapter: 'Evidence',
      },
      {
        id: 12,
        isOnTable: false,
        isBlocked: false,
        imgPath: '/images/evidence/photo.jpg',
        alt: 'Tree stump',
        chapter: 'Evidence',
      },
    ],
  },
  filesOnTable: [],
}

export const ReducerCaseFiles = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CASE_FILES_TYPES.ADD_ON_TABLE: {
      let filesOnTable
      const newCaseFiles = state.caseFiles[payload.chapter].map((item) => {
        if (item.id === payload.id) {
          filesOnTable = {
            ...item,
            isOnTable: true,
            position: {
              x: payload.position?.x,
              y: payload.position?.y,
            },
          }
          return filesOnTable
        }
        return item
      })

      return {
        ...state,
        caseFiles: {
          ...state.caseFiles,
          [payload.chapter]: newCaseFiles,
        },
        filesOnTable: [...state.filesOnTable, filesOnTable],
      }
    }
    case CASE_FILES_TYPES.REMOVE_FROM_TABEL: {
      const newFilesOnTable = state.filesOnTable.filter(
        (item) => item.id !== payload.id
      )

      let chapter = state.caseFiles[payload.chapter].map((item) => {
        if (item.id === payload.id) {
          return { ...item, isOnTable: false }
        }

        return item
      })

      return {
        ...state,
        caseFiles: {
          ...state.caseFiles,
          [payload.chapter]: chapter,
        },
        filesOnTable: newFilesOnTable,
      }
    }
    case CASE_FILES_TYPES.MOVE_AROUND_TABLE: {
      const newFilesOnTable = state.filesOnTable.map((item) => {
        if (item.id === payload.id) {
          return payload
        }
        return item
      })
      return {
        ...state,
        filesOnTable: newFilesOnTable,
      }
    }
    case CASE_FILES_TYPES.TOGGLE_BLOCK_FILE: {
      const newFilesOnTable = state.filesOnTable.map((item) => {
        if (item.id === payload) {
          return { ...item, isBlocked: !item.isBlocked }
        }
        return item
      })
      return {
        ...state,
        filesOnTable: newFilesOnTable,
      }
    }
    default:
      return state
  }
}
