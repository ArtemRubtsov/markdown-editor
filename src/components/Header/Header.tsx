import { toast } from 'react-toastify'

import clsx from 'clsx'
import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'
import {
  FaBold,
  FaCopy,
  FaItalic,
  FaLink,
  FaList,
  FaRegCommentAlt,
  FaRegCopy,
} from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImListNumbered } from 'react-icons/im'
import { IoCodeSlashSharp, IoUnlink } from 'react-icons/io5'
import { MdOutlineMinimize } from 'react-icons/md'

import s from './header.module.scss'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCopy } from '../../features/clipboard/clipboardSlice'
import SwitchMode from '../Switch/Switch'
import { Icon } from './Icon/Icon'

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
  {
    component: <CiImageOn />,
    key: 'image',
    md: '![Текст описания](https://www.example.com/image.jpg)',
  },
  { component: <FaLink />, key: 'link', md: '[Текст ссылки](https://www.example.com)' },
  { component: <IoUnlink />, key: 'link2', md: '<http://example.com/>' },
  { component: <MdOutlineMinimize />, key: 'br', md: '---' },
  {
    component: <FaRegCommentAlt />,
    key: 'comment',
    md: '[//]: # (Это комментарий, он не будет отображаться)',
  },
]

type HeaderProps = {
  mode: 'markdown' | 'mdx'
  setMode: (mode: 'markdown' | 'mdx') => void
}

export const Header = ({ mode, setMode }: HeaderProps) => {
  const mark = useAppSelector(state => state.mark.mark)
  const clipboard = useAppSelector(state => state.clipboard.copy)
  const dispatch = useAppDispatch()

  const handleCopy = () => {
    navigator.clipboard.writeText(mark)
    notify()
    setTimeout(() => {
      dispatch(setCopy(true))
    }, 1500)
    dispatch(setCopy(false))
  }
  const notify = () =>
    toast.info('Copied successfully!', {
      autoClose: 3000,
      position: 'bottom-center',
    })

  const changeMode = () => setMode(mode === 'markdown' ? 'mdx' : 'markdown')

  return (
    <ul className={s.ul}>
      {icons.map(({ component, key, md }) => (
        <Icon icon={component} key={key} md={md} />
      ))}
      <button
        className={clipboard ? s.copyAnimation : s.copy && s.active}
        onClick={handleCopy}
        type={'button'}
      >
        {clipboard ? <FaRegCopy /> : <FaCopy />}
      </button>
      <SwitchMode changeMode={changeMode} />
      <span className={clsx(mode === 'markdown' && s.mode, mode === 'mdx' && s.modeActive)}>
        {mode}
      </span>
    </ul>
  )
}
