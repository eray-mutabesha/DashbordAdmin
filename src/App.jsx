
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
 

  return (
    
      <section className='all_sections'>
        <section className='section_one'>
          <h1>SMS Zanneer</h1>
        </section>
        <section className='section_two'>
          <h1>Dashboar</h1>
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon="fa-regular fa-square-caret-down" />
           <FontAwesomeIcon icon="fa-brands fa-square-facebook" />

        </section>
      </section>
      
     
   
  )
}

export default App
