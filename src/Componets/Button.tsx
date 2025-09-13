import React from "react";

interface IBtnProps{
    className?:string,
    onClick?:()=>void,
    disable?:boolean
    children: React.ReactNode
}

const Button =({className,onClick,disable=false,children}:IBtnProps)=>{
    return(
        <button className={className} onClick={onClick} disabled={disable}>{children}</button>
    )
}

export default Button;