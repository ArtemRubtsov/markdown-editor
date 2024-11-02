import { Provider } from 'react-redux'

import { store } from './app/store'
import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Main />
      </Container>
    </Provider>
  )
}

export default App
