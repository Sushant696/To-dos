import React from 'react'

function LoginForm() {
  return (
    <div>
      <form action="submit">
        <input type="text" placeholder='Enter you UserName'/>
        <input type="password" placeholder='Enter you password' value={"password"}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
