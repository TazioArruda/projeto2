import { useState } from "react"
import Input from "../Input/indexInput";
import { Container, Global } from "@/@global/global";

export default function Form () {

    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return(
        <>  
            <Global/>
            <Container>
                <Input id='email' label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}
                hasError={!emailRegex.test(email)}/>
                <Input id="password" label='Password' type={showPassword? 'text': 'password' } value={password}
                onChange={(e => setPasword (e.target.value))}/>
            </Container>
        </>
            
        
        
    )
}