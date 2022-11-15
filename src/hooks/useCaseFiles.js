import { useSelector } from 'react-redux'

export const useCaseFiles = () => {
  const { chapter, caseFiles, filesOnTable } = useSelector((s) => s.RCaseFiles)
  return {
    chapter,
    caseFiles,
    filesOnTable,
  }
}
