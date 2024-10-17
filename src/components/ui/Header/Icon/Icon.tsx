type IconProps = {
    id: string
    icon: JSX.Element
  }
  
  export const Icon = ({ id, icon }: IconProps) => {
    const handlerElement = (e: React.MouseEvent<HTMLElement>, id: string) => {
      console.log(`Icon clicked: ${id}`)
    }
  
    return (
      <li onClick={(e) => handlerElement(e, id)}>
        {icon}
      </li>
    )
  }
  
