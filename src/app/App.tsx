import { useState } from 'react'
import { Provider } from 'react-redux'
import { Flip, ToastContainer } from 'react-toastify'

import { Container } from '../components/Container/Container'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { store } from './store'

function App() {
  const [mode, setMode] = useState<'markdown' | 'mdx'>('markdown')

  return (
    <Provider store={store}>
      <Container>
        <Header mode={mode} setMode={setMode} />
        <Main mode={'markdown'} />
        <ToastContainer
          draggable={'touch'}
          draggablePercent={60}
          limit={5}
          pauseOnFocusLoss={false}
          transition={Flip}
        />
      </Container>
    </Provider>
  )
}

export default App
