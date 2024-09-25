import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as D from '../../data'

type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: D.randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] =
    useState<SignUpFormType>(initialFormState)
  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
    },
    []
  )

  const [message, setMessage] = useState('');

  const navigate = useNavigate()
  const {signup} = useAuth()
  const createAccount = useCallback(async () => {
    console.log(email, password, confirmPassword)
    if (password === confirmPassword) {
      setMessage('');

      // 비밀번호 확인 체크
      if (password !== confirmPassword) {
        setMessage('비밀번호가 일치하지 않습니다.');
        return;
      }

      try {
        const response = await fetch(D.BACKEND_URL + '/user/join', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('회원가입 데이터:', data);

          if (data.ok) {
            setMessage('회원가입에 성공했습니다!');
            signup(email, password, () => navigate('/'))
          }

          setMessage(data.message || '회원가입 실패');
        } else {
          const errorData = await response.json();
          setMessage(errorData.message || '회원가입 실패');
        }
      } catch (error) {
        setMessage('서버와의 통신에 문제가 발생했습니다.');
      }
        
    } else alert('password is not equal to confirmPassword')
  }, [confirmPassword, email, navigate, password, signup])

  // prettier-ignore
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
          <input type="text" className="w-full p-3 mb-4 input input-primary" name="email" placeholder="Email" value={email} onChange={changed('email')}/>
          <input type="password" className="w-full p-3 mb-4 input input-primary" name="password" placeholder="Password" value={password} 
            onChange={changed('password')}/>
          <input type="password" className="w-full p-3 mb-4 input input-primary" name="confirm_password" placeholder="Confirm Password" 
            value={confirmPassword} onChange={changed('confirmPassword')}/>
          {message && <p style={{ color: message.includes('성공') ? 'green' : 'red' }}>{message}</p>}
          <button type="submit" className="w-full btn btn-primary" onClick={createAccount}>Create Account</button>
          <div className="mt-6 text-grey-dark">
            Already have an accout?
            <Link className="btn btn-link btn-primary" to="/login/">Login</Link>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  )
}
