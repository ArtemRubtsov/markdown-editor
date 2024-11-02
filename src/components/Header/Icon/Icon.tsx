import React from 'react'

import { useAppDispatch } from '../../../app/hooks'
import { markInsert } from '../../../features/editor'

type IconProps = {
  icon: React.JSX.Element
  md: string
}

export const Icon = ({ icon, md }: IconProps) => {
  const dispatch = useAppDispatch()
  const handleElement = (md: string) => {
    dispatch(markInsert({ md: md }))
  }

  return <li onClick={() => handleElement(md)}>{icon}</li>
}
