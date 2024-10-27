import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from 'react-icons/bs'
import { FaBold, FaItalic, FaLink, FaList, FaRegCommentAlt } from 'react-icons/fa'
import { GrBlockQuote, } from 'react-icons/gr'
import { ImListNumbered } from 'react-icons/im'
import { IoCodeSlashSharp, IoUnlink } from 'react-icons/io5'
import { CiImageOn } from 'react-icons/ci'
import { Icon } from './Icon/Icon'
import s from './header.module.scss'
import { MdOutlineMinimize } from 'react-icons/md'

const icons = [
  { component: <BsTypeH1 />, key: 'h1', md: '#' },
  { component: <BsTypeH2 />, key: 'h2', md: '##' },
  { component: <BsTypeH3 />, key: 'h3', md: '###' },
  { component: <BsTypeH4 />, key: 'h4', md: '####' },
  { component: <BsTypeH5 />, key: 'h5', md: '#####' },
  { component: <BsTypeH6 />, key: 'h6', md: '######' },
  { component: <FaBold />, key: 'bold', md: '**' },
  { component: <FaItalic />, key: 'italic', md: '*' },
  { component: <GrBlockQuote />, key: 'blockquote', md: '>' },
  { component: <ImListNumbered />, key: 'list-numbered', md: '1.' },
  { component: <FaList />, key: 'list', md: '-' },
  { component: <IoCodeSlashSharp />, key: 'code', md: '```' },
  { component: <CiImageOn />, key: 'image', md: '![Текст описания](https://www.example.com/image.jpg)' },
  { component: <FaLink />, key: 'link', md: '[Текст ссылки](https://www.example.com)' },
  { component: <IoUnlink />, key: 'link2', md: '<http://example.com/>' },
  { component: <MdOutlineMinimize />, key: 'br', md: '---' },
  { component: <FaRegCommentAlt />, key: 'comment', md: '[//]: # (Это комментарий, он не будет отображаться)' },
]

export const Header = () => {
  return (
    <ul className={s.ul}>
      {icons.map(({ component, key, md }) => (
        <Icon icon={component} key={key} md={md} />
      ))}
    </ul>
  )
}

