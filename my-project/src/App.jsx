import Demonstration from './components/demonstration/Demonstration'
import Nav from './components/header/Nav'
import Information from './components/information/Information'

function App() {

  return (
    <section className='flex flex-col gap-16'>
      <Nav/>
      <Demonstration/>
      <Information/>
    </section>
  )
}

export default App
