import { Navigate } from 'react-router-dom'
import { ROUTES } from '../const/routes'
import useAuth from '../hooks/useAuth'

const CloseRoute = ({ children }) => {
  const { isLogin } = useAuth()

  if (isLogin) {
    return <Navigate to={ROUTES.HOME} />
  }

  return children
}

export default CloseRoute
