import { DetailedHTMLProps, HTMLAttributes, useState} from "react";
import { View } from "../View/View";
import Markdown from "react-markdown";
import { Editor } from "../editor/Editor";

type MainProps = {
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = ({ ...props}: MainProps) => {
    const [mark, setMark] = useState<string>('')

  return (
    <main  {...props}>
        <Editor mark={mark} setMark={setMark}/>
        <View>
            <Markdown>{mark}</Markdown>
        </View>
    </main>
  )
}
