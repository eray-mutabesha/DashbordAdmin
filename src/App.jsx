
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
 

  return (
    
      <section className='all_sections'>
        <section className='section_one'>
          <h1>SMS Zanner</h1>
          <div className='all_tiltles_and_icons'>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <p>anonce</p>
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <p>anonce</p>
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <p>anonce</p>
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <p>anonce</p>
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <p>anonce</p>
          </div>
          <nav className='btn'>
          <button>Logout</button>
          </nav>
            
          </div>
        
        </section>
        <section className='section_two'>
          <h1>Dashboar</h1>
        
        </section>
      </section>
      
     
   
  )
}

export default App
