type IconProps = {
    index: number
    elem: JSX.Element
}

export const Icon = ({index, elem}: IconProps) => {
    
  return (
    <li key={index}>
        {elem}
    </li>
  )
}
