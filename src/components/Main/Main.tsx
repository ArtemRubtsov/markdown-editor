// import {  useState } from "react";
import { View } from "../View/View";
import Markdown, { Components } from "react-markdown";
import { Editor } from "../Editor/Editor";
import s from './main.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";
import { addMark, useMyContext } from "../../model/useMark";

type CodeParams = {
  children?: React.ReactNode
  className?: string |  undefined 
  components?: Components | undefined
}


export const Main = () => {
    // const [mark, setMark] = useState<string>('');

    const {mark, dispatch} = useMyContext()

    const codeParams = (props: CodeParams) => {
        const { children, className, ...rest } = props;
        const match = /language-(\w+)/.exec(className || '');
        return match ? (
            <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                style={dracula}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code {...rest} className={className}>
                {children}
            </code>
        );
    };

    return (
            <main className={s.main}>
                <Editor mark={mark.mark} setMark={(value: string) => dispatch(addMark(value))} />
                <View>
                    <Markdown components={{ code: codeParams }}>
                        {mark.mark}
                    </Markdown>
                </View>
            </main>
    );
};

