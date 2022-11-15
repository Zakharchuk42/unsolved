export const imgSrc = `${window.location.origin}`

const VICTIM = 'VICTIM'
const SUSPECTS = 'SUSPECTS'
const TESTIMONY = 'TESTIMONY'
const EVIDENCE = 'EVIDENCE'

export const CHAPTERS_NAMES = [VICTIM, SUSPECTS, TESTIMONY, EVIDENCE]

export const CHAPTER_FILES = {
  [VICTIM]: [
    { imgPath: '/images/victim/newspaper.png', alt: 'Newspaper' },
    { imgPath: '/images/victim/JackLumberski.jpg', alt: 'Jack Lumberski' },
    { imgPath: '/images/victim/CrimeScene.jpg', alt: 'Crime scene' },
  ],
  [SUSPECTS]: [
    { imgPath: '/images/suspects/JerryAndersen.png', alt: 'Jerry Andersen' },
    { imgPath: '/images/suspects/MartinPark.png', alt: 'Martin Park' },
    { imgPath: '/images/suspects/SamWilliams.png', alt: 'Sam Williams' },
  ],
  [TESTIMONY]: [
    { imgPath: '/images/testimony/JerryAndersen.jpg', alt: 'Jerry Andersen' },
    { imgPath: '/images/testimony/MartinPark.jpg', alt: 'Martin Park' },
    { imgPath: '/images/testimony/SamWilliams.jpg', alt: 'Sam Williams' },
  ],
  [EVIDENCE]: [
    { imgPath: '/images/evidence/call911.jpg', alt: 'Call 911' },
    { imgPath: '/images/evidence/letter.jpg', alt: 'Letter' },
    { imgPath: '/images/evidence/photo.jpg', alt: 'Tree stump' },
  ],
}
