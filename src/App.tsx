import ListaDeTarefas from './containers/ListaDeTarefas'
import SideBar from './containers/SideBar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
