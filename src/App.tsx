import { Provider } from "react-redux"
import { Container } from "./components/Container/Container"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { store } from "./app/store"


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
