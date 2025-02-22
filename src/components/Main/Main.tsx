import React, { useState } from 'react'
import Markdown, { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import s from './main.module.scss'

import { useAppSelector } from '../../app/hooks'
import { ContainerMdx } from '../ContainerMDX/ContainerMdx'
import { Editor } from '../Editor/Editor'
import { View } from '../View/View'

type CodeParams = {
  children?: React.ReactNode
  className?: string | undefined
  components?: Components | undefined
}
type MainProps = {
  mode: 'markdown' | 'mdx'
}

export const Main = ({ mode }: MainProps) => {
  const mark = useAppSelector(state => state.mark.mark)

  const codeParams = (params: CodeParams) => {
    const { children, className, ...rest } = params
    const match = /language-(\w+)/.exec(className || '')

    return match ? (
      <SyntaxHighlighter {...rest} PreTag={'div'} language={match[1]} style={dracula}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
  }

  return (
    <main className={s.main}>
      <Editor mark={mark} mode={'markdown'} />
      <View>
        {mode === 'markdown' ? (
          <Markdown components={{ code: codeParams }}>{mark}</Markdown>
        ) : (
          <ContainerMdx>{mark}</ContainerMdx>
        )}
      </View>
    </main>
  )
}
