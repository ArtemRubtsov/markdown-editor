import s from './view.module.scss'
type ViewProps = {
    children:  React.ReactNode;

}


export const View = ({children}: ViewProps) => {
  return (
    <div className={s.view}>{children}</div>
  )
}
