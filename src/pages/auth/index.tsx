// @ts-nocheck

import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { FaEye, FaEyeSlash, FaLongArrowAltRight } from 'react-icons/fa'
import { useState } from 'react'
import { usePasswordToggle } from '@/assets/utils.ts'
import { loginUser, registerUser } from '@/store/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/use-toast.ts'
import { CgSpinner } from 'react-icons/cg'

const initialSignUpForm = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
}

const initialLoginForm = {
  email: '',
  password: '',
}
const AuthPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { inputType, visible, toggleVisibility } = usePasswordToggle()
  const [logInForm, setLogInForm] = useState(initialLoginForm)
  const [signUpForm, setSignUpForm] = useState(initialSignUpForm)
  const { isLoading } = useSelector(
    (state) => state.auth
  )

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // @ts-ignore
    dispatch(registerUser(signUpForm)).then((data) => {
      console.log(data)
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          description: 'User Created Successfully',
          variant: 'success'
        })
        setSignUpForm(initialSignUpForm)
        navigate('/auth')
      } else {
        toast({
          title: data?.payload?.message,
          description: 'Failed to register new user',
          variant: 'destructive'
        })
      }
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginUser(logInForm)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          description: "User logged in Successfully",
          variant: "success"
        });
        navigate(0)
      } else {
        toast({
          title: data?.payload?.message,
          description: 'Failed to Log in User',
          variant: "destructive",
        });
      }
    });
  }

  const handleLogInFormOnChange = (e: {
    preventDefault: () => void
    target: { name: string; value: string }
  }) => {
    e.preventDefault()
    setLogInForm({
      ...logInForm,
      [e.target.name]: e.target.value
    })
  }
  const handleSignUpFormOnChange = (e: {
    preventDefault: () => void
    target: { name: string; value: string }
  }) => {
    e.preventDefault()
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className={'section py-5 bg-gray-50'}>
        <ul className={'flex gap-4 items-center text-gray-600 text-sm'}>
          <Link
            to={'/'}
            className={
              'flex duration-150 gap-4 items-center hover:text-secondary-500'
            }
          >
            <i className="fa-solid fa-house text-base"></i>
            <li>
              Home <i className="ml-2 fa-solid fa-angle-right"></i>
            </li>
          </Link>
          <Link to={'/'}>
            <li>
              User account <i className="ml-2 fa-solid fa-angle-right"></i>
            </li>
          </Link>
          <Link to={'/products'}>
            <li className=" text-secondary-500">Sign In</li>
          </Link>
        </ul>
      </div>

      <section className="section py-20 flex justify-center">
        <Tabs defaultValue="sign in" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign in">Sign in</TabsTrigger>
            <TabsTrigger value="sign up">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign in">
            <Card>
              <CardContent className="space-y-2">
                <form onSubmit={handleLogin}>
                  <div className="py-4">
                    <Label htmlFor="name" className="text-gray-900">
                      Email Address
                    </Label>
                    <Input
                      name={'email'}
                      value={logInForm.email}
                      onChange={handleLogInFormOnChange}
                      type="email"
                      id="name"
                    />
                  </div>
                  <div className="space-y-1 w-full pb-5">
                    <div className="flex justify-between">
                      <Label htmlFor="password" className="text-gray-900">
                        Password
                      </Label>
                      <a href="#" className="text-sm text-secondary-500">
                        Forgot Password
                      </a>
                    </div>
                    <div
                      className={
                        'flex gap-4 items-center rounded-md border border-input px-3 py-1 '
                      }
                    >
                      <Input
                        name={'password'}
                        value={logInForm.password}
                        onChange={handleLogInFormOnChange}
                        type={inputType}
                        id="password"
                        className={
                          'w-full ring-0 border-0 outline-none focus:outline-none focus-visible:ring-0 shadow-none'
                        }
                      />
                      <button type={'button'} onClick={toggleVisibility}>
                        {visible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <button
                    type={'submit'}
                    className={`flex items-center font-medium justify-center rounded-sm text-gray-00 bg-primary-500 px-6 py-[.5rem] gap-4 mb-4 w-full`}
                  >
                    {
                      !isLoading ?
                        <>
                          SIGN IN
                          <span>
                            <FaLongArrowAltRight />
                          </span>
                        </> :
                        <CgSpinner/>
                    }
                  </button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sign up">
            <Card>
              <CardContent className="space-y-2">
                <form
                  className="space-y-2"
                  onSubmit={handleSignUp}
                  method="POST"
                >
                  <div className="py-4">
                    <Label htmlFor="name" className="text-gray-900">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={signUpForm.name}
                      onChange={handleSignUpFormOnChange}
                    />
                  </div>
                  <div className="pb-4">
                    <Label htmlFor="email" className="text-gray-900">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={signUpForm.email}
                      onChange={handleSignUpFormOnChange}
                    />
                  </div>
                  <div className="space-y-1 w-full pb-5">
                    <Label htmlFor="password" className="text-gray-900">
                      Password
                    </Label>
                    <div
                      className={
                        'flex gap-4 items-center rounded-md border border-input px-3 py-1 '
                      }
                    >
                      <Input
                        type="password"
                        name={'password'}
                        id="password"
                        value={signUpForm.password}
                        onChange={handleSignUpFormOnChange}
                        className={
                          'w-full ring-0 border-0 outline-none focus:outline-none focus-visible:ring-0 shadow-none'
                        }
                      />
                      <button type={'button'} onClick={toggleVisibility}>
                        {visible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1 w-full pb-2">
                    <Label htmlFor="confirm_password" className="text-gray-900">
                      Confirm password
                    </Label>
                    <div
                      className={
                        'flex gap-4 items-center rounded-md border border-input px-3 py-1 '
                      }
                    >
                      <Input
                        type={inputType}
                        name={'confirm_password'}
                        id="comfirm_password"
                        value={signUpForm.confirm_password}
                        onChange={handleSignUpFormOnChange}
                        className={
                          'w-full ring-0 border-0 outline-none focus:outline-none focus-visible:ring-0 shadow-none'
                        }
                      />
                      <button type={'button'} onClick={toggleVisibility}>
                        {visible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 items-start pb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="accent-primary-500 text-gray-100"
                    />
                    <Label htmlFor="terms" className="text-gray-800">
                      Do you agree to Misercom
                      <span className="text-secondary-500">
                        Terms of Condition
                      </span>{' '}
                      and
                      <span className="text-secondary-500">Privacy Policy</span>
                      .
                    </Label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className={`flex items-center justify-center rounded-sm text-gray-00 bg-primary-500 px-6 py-[.5rem] gap-4 mb-4 w-full`}
                    >
                      SIGN UP
                      <span>
                        <i className="fa fa-long-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </form>

                <div className="flex justify-center gap-1">
                  <hr className="my-4 border-gray-300 w-full" />
                  <p>or</p>
                  <hr className="my-4 border-gray-300 w-full" />
                </div>

                <div>
                  <button
                    className={`flex items-center justify-center rounded-sm text-gray-700 px-6 py-[.5rem] gap-4 mb-4 w-full border`}
                  >
                    <span>
                      <img
                        src="/images/google.png"
                        alt="google icon"
                        width={20}
                      />
                    </span>
                    <a href={'#'} className="flex-1 text-center">
                      Log in with Google
                    </a>
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
export default AuthPage
