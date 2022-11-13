import { useDispatch } from 'react-redux'
import { onLogOut } from '../../Store/actions/ActionsUser'

export const HomePage = () => {
  const dispatch = useDispatch()
  const logout = () => dispatch(onLogOut())
  return <div onClick={logout}>Log Out</div>
}
