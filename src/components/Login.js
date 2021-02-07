import React from 'react'
import { connect } from 'react-redux'
import { signupToggle, handleLoginChange, sendSignup, sendLogin } from '../redux/userActionCreator'

const Login = (props) => {
    const { signup, signupToggle, form, handleLoginChange, sendSignup, sendLogin } = props
    const { username, password, confirmPassword } = form

    const onSubmitLogin = (e) => {
        e.preventDefault()
        if (signup){
            // eslint-disable-next-line 
            if (password == confirmPassword){
            sendSignup({username: username, password: password})
            } else {
                alert("passwords do not match")
            }
        } else {
            sendLogin({username: username, password: password})
        } 
    }
    return(
      <>
        <h3>{signup ? "Sign up" : "Login"} </h3>
        <form onSubmit ={ onSubmitLogin }>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={handleLoginChange}/>
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={handleLoginChange} />
          </label><br/>
          {signup &&
            <>
              <label>
                Confirm Password:
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleLoginChange} />
              </label>
            </>
          }
          <input type="submit" value="Submit"/>
        </form>
        <br/>
        <button onClick={signupToggle}>{signup ? "Login!" : "Sign up!"}</button>
      </>
    )
  }

const mapStateToProps = (state) => ({signup: state.user.signup, form: state.user.loginForm})

export default connect(mapStateToProps, { signupToggle, handleLoginChange, sendSignup, sendLogin })(Login)