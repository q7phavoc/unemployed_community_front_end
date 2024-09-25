import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider, useAuth} from './contexts'
import RoutesSetup from './routes/RoutesSetup'
import {useStore} from './store'
import { useEffect, useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(true);
  const { login, loggedUser } = useAuth()
  const store = useStore()
  
  useEffect(() => {
    // 세션 상태 확인
    // const checkSession = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8001/checkSession', {
    //       method: 'GET',
    //       credentials: 'include', // 세션 쿠키 포함
    //     });
    //     const data = await response.json();
    //     // login(email, password, () => navigate('/'))
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('세션 확인 실패:', error);
    //   }
    // };
    // checkSession();
    console.log(loggedUser);
  }, []);

  // if (loading) return <p>Loading...</p>;

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <AuthProvider>
            <RoutesSetup />
          </AuthProvider>
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}
