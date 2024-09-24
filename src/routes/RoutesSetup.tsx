import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import RequireAuth from './Auth/RequireAuth'
import LandingPage from './LandingPage'
import Board from '../pages/Board'
import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import NoMatch from './NoMatch'
import Main from '../pages/Main'
import Community from '../pages/Community'
import Course from '../pages/Course'
import Event from '../pages/Event'
import Profile from '../pages/Profile'
import Resume from '../pages/Resume'
import BoardDetail from '../pages/Board/detail'

export default function RoutesSetup() {
  // prettier-ignore
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/board"
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          }
        />
        <Route path="/board/detail"
          element={
            <RequireAuth>
              <BoardDetail />
            </RequireAuth>
          }
        />
        <Route path="/board/detail/:id"
          element={
            <RequireAuth>
              <BoardDetail />
            </RequireAuth>
          }
        />
        <Route path="/community"
          element={
            <RequireAuth>
              <Community />
            </RequireAuth>
          }
        />
        <Route path="/course"
          element={
            <RequireAuth>
              <Course />
            </RequireAuth>
          }
        />
        <Route path="/event"
          element={
            <RequireAuth>
              <Event />
            </RequireAuth>
          }
        />
        <Route path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/resume"
          element={
            <RequireAuth>
              <Resume />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
