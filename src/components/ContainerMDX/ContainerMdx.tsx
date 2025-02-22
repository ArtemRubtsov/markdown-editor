import { ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'

import s from './containerMdx.module.scss'

type Props = {
  children: ReactNode
}

export const ContainerMdx = ({ children }: Props) => {
  return (
    <>
      <form className={s.form}>
        <MDXProvider>{children}</MDXProvider>
      </form>
    </>
  )
}
