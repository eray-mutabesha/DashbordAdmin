
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect,useRef} from 'react';
function App() {
  const circular_progress= useRef(null);
  const progress_value = useRef(null);
  
 
  useEffect(() => {
    let  progressStartvalue=0;
      const progress=setInterval(()=>{
       
        let  stopProgress=90;
        progressStartvalue++;
        if(progressStartvalue==stopProgress){
         //Clearing the interval
         clearInterval(progress);
        }
        else{
          
          progress_value.current.innerHTML=`${progressStartvalue}%`;
          circular_progress.current.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue * 3.6}deg,#e9e0e0 0deg)`
          
        }

      },100);
   
      return () => clearInterval(progress);
    
}, [circular_progress,progress_value]);
      
  
    

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
          <div className='pages_of_com'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
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
                <nav className='icon_nav'><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
                
                  <nav className='circular_progress' ref={circular_progress} >
                       <p className='progress_value' ref={progress_value}></p>
                  </nav>

              </div>
              <div>
              <nav className='icon_nav'><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
              <nav className='circular_progress'>
                       <span className='progress_value'>40%</span>
                  </nav>
                </div>
                <div>
                <nav className='icon_nav'><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
                <nav className='circular_progress'>
                       <span className='progress_value'>100%</span>
                  </nav>
                </div>
              
            </div>
          </div>
        
        </section>
      </section>
      
  )
}

export default App
