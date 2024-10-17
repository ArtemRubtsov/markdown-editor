import { DetailedHTMLProps, HTMLAttributes, useState} from "react";
import { View } from "../View/View";
import Markdown from "react-markdown";
import { Editor } from "../Editor/Editor";
import s from './main.module.scss'

type MainProps = {
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = ({ ...props}: MainProps) => {
    const [mark, setMark] = useState<string>('')

  return (
    <main className={s.main} {...props}>
        <Editor mark={mark} setMark={setMark}/>
        <View>
            <Markdown>{mark}</Markdown>
        </View>
    </main>
  )
}
