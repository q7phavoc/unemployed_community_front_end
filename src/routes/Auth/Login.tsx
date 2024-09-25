import type { ChangeEvent } from 'react'
import { useState, useCallback, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import * as U from '../../utils'
import { BACKEND_URL } from '../../data'

type LoginFormType = Record<'email' | 'password', string>
const initialFormState = { email: '', password: '' }

export default function Login() {
  const [{ email, password }, setForm] = useState<LoginFormType>(initialFormState)
  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({ ...obj, [key]: e.target.value }))
    }, [])

  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('');
  const loginAccount = useCallback(async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError('');

    // 서버로 로그인 요청
    try {
      const response = await fetch(BACKEND_URL + '/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('로그인 데이터:', data);

        if (data.ok) {
          login(email, password, () => navigate('/'))
        }

        setError(data.message || '로그인 실패');
      } else {
        const errorData = await response.json();
        setError(errorData.message || '로그인 실패');
      }
    } catch (error) {
      console.log(error);
      setError('서버와의 통신에 문제가 발생했습니다.');
    }
  }, [email, login, navigate, password])

  useEffect(() => {
    U.readObjectP<LoginFormType>('user')
      .then(user => {
        if (user) setForm(user)
      })
      .catch(e => { })
  }, [])

  // prettier-ignore
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>
          <input type="text" className="w-full p-3 mb-4 input input-primary" name="email" placeholder="Email" value={email}
            onChange={changed('email')} />
          <input type="password" className="w-full p-3 mb-4 input input-primary" name="password" placeholder="Password" value={password}
            onChange={changed('password')} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="w-full btn btn-primary" onClick={loginAccount}>LOGIN</button>
          <div className="mt-6 text-gray-800">
            Create account?
            <Link className="btn btn-link btn-primary" to="/signup/">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  )
}
