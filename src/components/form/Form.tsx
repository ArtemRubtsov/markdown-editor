import React from "react"

export const Form = () => {
    const [edit, setEdit] = React.useState('')

    const changeHandler = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setEdit(e.currentTarget.value)
    }

  return (
    <form>
        <label>Test</label>
        <textarea onChange={changeHandler} value={edit} name="" id=""></textarea>
    </form>
  )
}
