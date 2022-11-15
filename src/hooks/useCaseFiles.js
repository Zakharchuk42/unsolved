import { useSelector } from 'react-redux'

export const useCaseFiles = () => {
  const { chapter, caseFiles } = useSelector((s) => s.RCaseFiles)
  return {
    chapter,
    caseFiles,
  }
}
