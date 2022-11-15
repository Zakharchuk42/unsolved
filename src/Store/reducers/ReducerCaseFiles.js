import { CASE_FILES_TYPES } from '../types'

const INITIAL_STATE = {
  chapter: ['Victim', 'Suspects', 'Testimony', 'Evidence'],
  caseFiles: {
    Victim: [
      {
        id: 1,
        isOnTable: false,
        imgPath: '/images/victim/newspaper.png',
        alt: 'Newspaper',
        chapter: 'Victim',
      },
      {
        id: 2,
        isOnTable: false,
        imgPath: '/images/victim/JackLumberski.jpg',
        alt: 'Jack Lumberski',
        chapter: 'Victim',
      },
      {
        id: 3,
        isOnTable: false,
        imgPath: '/images/victim/CrimeScene.jpg',
        alt: 'Crime scene',
        chapter: 'Victim',
      },
    ],
    Suspects: [
      {
        id: 1,
        isOnTable: false,
        imgPath: '/images/suspects/JerryAndersen.png',
        alt: 'Jerry Andersen',
        chapter: 'Suspects',
      },
      {
        id: 2,
        isOnTable: false,
        imgPath: '/images/suspects/MartinPark.png',
        alt: 'Martin Park',
        chapter: 'Suspects',
      },
      {
        id: 3,
        isOnTable: false,
        imgPath: '/images/suspects/SamWilliams.png',
        alt: 'Sam Williams',
        chapter: 'Suspects',
      },
    ],
    Testimony: [
      {
        id: 1,
        isOnTable: false,
        imgPath: '/images/testimony/JerryAndersen.jpg',
        alt: 'Andersen`s form',
        chapter: 'Testimony',
      },
      {
        id: 2,
        isOnTable: false,
        imgPath: '/images/testimony/MartinPark.jpg',
        alt: 'Park`s form',
        chapter: 'Testimony',
      },
      {
        id: 3,
        isOnTable: false,
        imgPath: '/images/testimony/SamWilliams.jpg',
        alt: 'Williams`es form',
        chapter: 'Testimony',
      },
    ],
    Evidence: [
      {
        id: 1,
        isOnTable: false,
        imgPath: '/images/evidence/call911.jpg',
        alt: 'Call 911',
        chapter: 'Evidence',
      },
      {
        id: 2,
        isOnTable: false,
        imgPath: '/images/evidence/letter.jpg',
        alt: 'Letter',
        chapter: 'Evidence',
      },
      {
        id: 3,
        isOnTable: false,
        imgPath: '/images/evidence/photo.jpg',
        alt: 'Tree stump',
        chapter: 'Evidence',
      },
    ],
  },
}

export const ReducerCaseFiles = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CASE_FILES_TYPES.ADD_ON_TABLE: {
      const newState = state.caseFiles[payload.chapter].map((item) =>
        item.id === payload.id ? { ...item, isOnTable: true } : item
      )

      return {
        ...state,
        caseFiles: {
          ...state.caseFiles,
          [payload.chapter]: newState,
        },
      }
    }
    default:
      return state
  }
}
