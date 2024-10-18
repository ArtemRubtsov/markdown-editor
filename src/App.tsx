import { Container } from "./components/Container/Container"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { MyContextProvider } from "./model/useMark"


function App() {
  return (
      <Container>
        <MyContextProvider>
          <Header />
          <Main />
        </MyContextProvider>
      </Container>
  )
}

export default App
