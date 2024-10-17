import React from "react"

type IconProps = {
    id: string
    icon: JSX.Element
  }
  
  export const Icon = ({ id, icon }: IconProps) => {
    const handlerElement = ( id: string) => {
      console.log(`Icon clicked: ${id}`)
    }
  
    return (
      <li onClick={() => handlerElement(id)}>
        {icon}
      </li>
    )
  }
  
