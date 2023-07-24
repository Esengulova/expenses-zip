import React, {useState} from 'react'
import { styled } from 'styled-components'
import Card from '../UI/card/Card'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'

const Login = ({onLogin}) => {
	const [userName, setUserName] =useState('');
	const [password, setPassword] =useState('');

	const handleLogin = ()=> {
		if (username === 'yuor login' && password === 'your password'){
			onLogin()
		}else {
			alert('login or password')
		}
	}
	return (
		
<StyledCard>
			<StyledForm>
				<FormInput
				
					label='Email'
					containerClassName='field'
					// error={false}
					onChange={(e)=> setUserName(e.target.value)}
				/>
				<FormInput
					label='Password'
					containerClassName='field'
					type='password'
					// error={false}
					onChange={(e)=>setPassword(e.target.value)}
				/>
				<StyledButton type='submit'>Login</StyledButton>
			</StyledForm>
		</StyledCard>
		
		
		
	)
	
}



const StyledCard = styled(Card)`
	width: 50rem;
	max-width: 90%;
	margin: 0 auto;
	padding: 2rem 1.5rem;
	margin-top: 5rem;
`

const StyledForm = styled('form')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	.field {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.field > label {
		flex: 1;
	}
	.field > input {
		flex: 5;
	}
`
const StyledButton = styled(Button)`
	align-self: center;
`

export default Login
