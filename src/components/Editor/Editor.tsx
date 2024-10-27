import React from 'react';
import s from './edit.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { changeMark } from '../../features/mark';

type EditProps = {
  mark: string
}

export const Editor = ({mark}: EditProps) => {
  const dispatch = useAppDispatch()

  const handleMarkdown = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(changeMark(e.currentTarget.value))
  } 

  
  return (
      <form className={s.form}>
          <textarea  className={s.textarea} placeholder='Enter your markdown' onChange={handleMarkdown} value={mark} />
      </form>

  )
}
