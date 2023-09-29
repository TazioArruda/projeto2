import { DetailedHTMLProps, InputHTMLAttributes, ReactElement, useState } from "react"
import { StyledDiv, StyledIcon, StyledInput, StyledLabel } from "../style/input"

interface CompProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label:string
    id: string
    hasError?:boolean
    icon?:ReactElement
    onIcon?:() => void
    
}

export default function Input ({label, id, hasError, icon, onIcon, ...props}:CompProps) {

    const classis = [
        props.value? 'active': '',
        (hasError && props.value) ? 'error': ''
    ]

    return(
        <>  
            <StyledDiv className={classis.join('')}>
                <StyledInput {...props} id={id} placeholder="Insira seu e-mail"/> 
                <StyledLabel htmlFor={id}>{label}</StyledLabel>

                {icon &&(
                    <StyledIcon onClick={onIcon}>{icon}</StyledIcon>
                )}

            </StyledDiv>
        
        </>
            
        
        
    )
}