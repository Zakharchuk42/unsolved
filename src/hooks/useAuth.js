import { useSelector } from 'react-redux'

export const useAuth = () => {
  const { uid, name } = useSelector((s) => s.RUser)
  return {
    isLogin: !!name,
    uid,
    name,
  }
}

export default useAuth
