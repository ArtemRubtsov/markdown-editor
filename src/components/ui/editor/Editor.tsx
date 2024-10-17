import s from './edit.module.scss'

type EditProps = {
  setMark:  (mark: string) => void;
  mark: string
}

export const Editor = ({mark, setMark}: EditProps) => {
  
  const handleMarkdown = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setMark(e.currentTarget.value)
  } 

  return (
      <form className={s.form}>
          <textarea className={s.textarea} placeholder='Enter your markdown' onChange={handleMarkdown} value={mark} name=""  />
      </form>

  )
}
