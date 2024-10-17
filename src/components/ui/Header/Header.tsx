import { BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from 'react-icons/bs'
import { FaBold, FaItalic, FaLink, FaList } from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImListNumbered } from 'react-icons/im'
import { IoCodeSlashSharp } from 'react-icons/io5'
import { CiImageOn } from 'react-icons/ci'
import s from './header.module.scss'

const icons = [
    <BsTypeH1 />,
    <BsTypeH2 />, 
    <BsTypeH3 />, 
    <BsTypeH4 />, 
    <BsTypeH5 />, 
    <BsTypeH6 />, 
    <FaBold />, 
    <FaItalic />, 
    <GrBlockQuote />,
    <ImListNumbered />,
    <FaList />,
    <IoCodeSlashSharp />,
    <CiImageOn />,
    <FaLink />
  ]

export const Header = () => {
  return (
    <ul className={s.ul}>     
      {
      icons.map((el, i) => {
        return  (
          <li key={i}>{el}</li>
        )
      })}
    </ul>
  )
}
