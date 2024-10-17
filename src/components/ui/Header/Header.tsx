import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from 'react-icons/bs'
import { FaBold, FaItalic, FaLink, FaList } from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImListNumbered } from 'react-icons/im'
import { IoCodeSlashSharp } from 'react-icons/io5'
import { CiImageOn } from 'react-icons/ci'
import { Icon } from './Icon/Icon'
import s from './header.module.scss'


const icons = [
  { component: <BsTypeH1 />, key: 'h1' },
  { component: <BsTypeH2 />, key: 'h2' },
  { component: <BsTypeH3 />, key: 'h3' },
  { component: <BsTypeH4 />, key: 'h4' },
  { component: <BsTypeH5 />, key: 'h5' },
  { component: <BsTypeH6 />, key: 'h6' },
  { component: <FaBold />, key: 'bold' },
  { component: <FaItalic />, key: 'italic' },
  { component: <GrBlockQuote />, key: 'blockquote' },
  { component: <ImListNumbered />, key: 'list-numbered' },
  { component: <FaList />, key: 'list' },
  { component: <IoCodeSlashSharp />, key: 'code' },
  { component: <CiImageOn />, key: 'image' },
  { component: <FaLink />, key: 'link' }
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

