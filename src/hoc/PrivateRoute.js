import { Navigate } from 'react-router-dom'
import { ROUTES } from '../const/routes'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { isLogin } = useAuth()

  if (!isLogin) {
    return <Navigate to={ROUTES.START} />
  }

  return children
}

export default PrivateRoute
