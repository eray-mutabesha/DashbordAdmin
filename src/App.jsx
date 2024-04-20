
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
          <div className='flex'>
          <div>
            <h1>Dashboard</h1>
            <p className='dashboard_p'>Tableau de bord de l'administrateur.
             Retrouvez ici le resumé de tout ce qui se passe dans votre école.</p>
          </div>
          <div className='grid'>
          <div className='cominique'>
            <p><strong>Communiqué du 2024-04-08 21:30:08</strong>
            <strong>Rappel des Consignes et Soutien pour une Année Réussie</strong>
            Chers Élèves, Nous espérons que vous vous porte...</p>

            <button>lire plus</button>
          </div>
          </div>
          </div>
          <div>
            <h1>Statistiques des eleves</h1>
            <div className='all_stat'>
              <nav>
              <h2>Statistique</h2>
              <p>Estimation des nos eleves fille et garcon</p>
              <p> </p>
              </nav>
              
              <div>
                <nav><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>

              </div>
              <div>
              <nav><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
                
                </div>
                <div>
                <nav><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
                
                </div>
              
            </div>
          </div>
          
          
        
        </section>
      </section>
      
     
   
  )
}

export default App
