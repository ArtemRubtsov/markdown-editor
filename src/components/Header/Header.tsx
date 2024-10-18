import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from 'react-icons/bs'
import { FaBold, FaItalic, FaLink, FaList } from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImListNumbered } from 'react-icons/im'
import { IoCodeSlashSharp } from 'react-icons/io5'
import { CiImageOn } from 'react-icons/ci'
import { Icon } from './Icon/Icon'
import s from './header.module.scss'

const icons = [
  { component: <BsTypeH1 />, key: '#'},
  { component: <BsTypeH2 />, key: '##'},
  { component: <BsTypeH3 />, key: '###'},
  { component: <BsTypeH4 />,key: '####'},
  { component: <BsTypeH5 />, key: '#####'},
  { component: <BsTypeH6 />, key: '######'},
  { component: <FaBold />, key: '**'},
  { component: <FaItalic />, key: '*'},
  { component: <GrBlockQuote />, key: '>'},
  { component: <ImListNumbered />, key: '1.'},
  { component: <FaList />, key: '-'},
  { component: <IoCodeSlashSharp />, key: '`'},
  { component: <CiImageOn />, key: '![image]()'},
  { component: <FaLink />, key: '[Текст ссылки](https://example.com)'}
]



export const Header = () => {
  return (
    <ul className={s.ul}>
      {icons.map(({ component, key }) => (
        <Icon icon={component} key={key} id={key} />
      ))}
    </ul>
  )
}

