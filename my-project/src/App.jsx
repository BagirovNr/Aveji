import Demonstration from './components/demonstration/Demonstration'
import Nav from './components/header/Nav'
import HowWeWork from './components/howWeWork/HowWeWork'
import Information from './components/information/Information'

function App() {

  return (
    <section className='flex flex-col gap-20'>
      <Nav/>
      <Demonstration/>
      <Information/>
      <HowWeWork/>  
    </section>  
  )
}

export default App
