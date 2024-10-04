import { marked } from "marked"
import {Form} from '../../form/Form'

export const Editor = () => {
    const res = marked.parse('# Marked in browser\n\nRendered by **marked**.');
  return (
    <main>
        {/* {res} */}
        <Form />
    </main>
  )
}
