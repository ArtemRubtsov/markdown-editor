import style from './Container.module.scss'

type Props = {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {
  return (
    <section className={style.container}>{children}</section>
  )
}
