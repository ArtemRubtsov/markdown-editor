import { useAppDispatch } from "../../../app/hooks"
import { titleAdded } from "../../../features/editor"

type IconProps = {
    md: string
    icon: JSX.Element
  }
  
  export const Icon = ({ md, icon }: IconProps) => {
    const dispatch = useAppDispatch()
    const handleElement = ( md: string) => {
      dispatch(titleAdded({md: md}))
    }
  
    return (
      <li onClick={() => handleElement(md)}>
        {icon}
      </li>
    )
  }
  
