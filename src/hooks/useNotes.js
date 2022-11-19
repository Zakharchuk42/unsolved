import { useSelector } from 'react-redux'

export const useNotes = () => {
  const { notes } = useSelector((s) => s.RNotes)
  return notes
}
