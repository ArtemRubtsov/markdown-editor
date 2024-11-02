import React from 'react';
import s from './edit.module.scss'
import { useAppDispatch } from '../../app/hooks';
import { changeMark } from '../../features/mark';
import { keyBoard, } from '../../features/editor';

type EditProps = {
  mark: string
}

export const Editor = ({mark}: EditProps) => {
  const dispatch = useAppDispatch()

  const keysToHeader = ['1', '2', '3', '4', '5', '6']
  const keysToElem = ['b', 'i', '>', 'l', 'o', 'c', 'p', 'a', '/']


  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.altKey && keysToHeader.includes(e.key)) {
      e.preventDefault()
      dispatch(keyBoard(e.key))
    }
    if(e.altKey && keysToElem.includes(e.key)){
      e.preventDefault()
      dispatch(keyBoard(e.key))
    }
  }

  const handleMarkdown = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(changeMark(e.currentTarget.value))
  } 

  return (
      <form className={s.form}>
          <textarea  className={s.textarea} placeholder='Enter your markdown' onKeyDown={handleOnKeyPress} onChange={handleMarkdown} value={mark} />
      </form>
  )
}
