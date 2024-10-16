type EditProps = {
  setMark:  (mark: string) => void;

  mark: string
}

export const Editor = ({mark, setMark}: EditProps) => {
  

  const handleMarkdown = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setMark(e.currentTarget.value)
  } 

  return (
      <form>
          <textarea onChange={handleMarkdown} value={mark} name="" id="" />
      </form>

  )
}
