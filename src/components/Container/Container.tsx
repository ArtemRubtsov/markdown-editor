import React from 'react'
import s from './Container.module.scss'

type Props = {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {
  return (
    <section className={s.container}>{children}</section>
  )
}
