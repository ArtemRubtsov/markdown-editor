import React from 'react'

import s from './edit.module.scss'

import { useAppDispatch } from '../../app/hooks'
import { keyBoard } from '../../features/editor'
import { changeMark } from '../../features/mark'

type EditProps = {
  mark: string
}

export const Editor = ({ mark }: EditProps) => {
  const dispatch = useAppDispatch()

  const keysToHeader = ['1', '2', '3', '4', '5', '6']
  const keysToElem = ['b', 'i', '>', 'l', 'o', 'c', 'p', 'a', '/']

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.altKey && keysToHeader.includes(e.key)) {
      e.preventDefault()
      dispatch(keyBoard(e.key))
    }
    if (e.altKey && keysToElem.includes(e.key)) {
      e.preventDefault()
      dispatch(keyBoard(e.key))
    }
  }

  const handleMarkdown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeMark(e.currentTarget.value))
  }

  return (
    <form className={s.form}>
      <textarea
        className={s.textarea}
        onChange={handleMarkdown}
        onKeyDown={handleOnKeyPress}
        placeholder={'Enter your markdown'}
        value={mark}
      />
    </form>
  )
}
