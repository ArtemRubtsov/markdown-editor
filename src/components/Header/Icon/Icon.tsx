import { addMark, useMyContext } from "../../../model/useMark"

type IconProps = {
    id: string
    icon: JSX.Element
  }
  
  export const Icon = ({ id, icon }: IconProps) => {
    const {dispatch} = useMyContext()
    const handlerElement = ( id: string) => {
      console.log(`Icon clicked: ${id}`)
      dispatch(addMark(id))
    }

  
    return (
      <li onClick={() => handlerElement(id)}>
        {icon}
      </li>
    )
  }