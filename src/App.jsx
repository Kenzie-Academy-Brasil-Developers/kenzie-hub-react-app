import { UserProvider } from './contexts/UserContext'
import { RoutesMain } from './routes/mainRoutes'

export function App() {

  return (
    <UserProvider>
      <RoutesMain/>
    </UserProvider>
  )
}