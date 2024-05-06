
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'




function App() {
  const circular_progress= useRef(null);
  const progress_value = useRef(null);
  const circular_progress_garcon= useRef(null);
  const progress_value_garcon = useRef(null);
  const circular_progress_fille= useRef(null);
  const progress_value_fille = useRef(null);
  // ref for communication div
  const all_communication_div=useRef();
// ........................for 90%.................................................
// ........................for 90%.................................................
  useEffect(() => {
    let  progressStartvalue=0;
      const progress=setInterval(()=>{
       
        let  stopProgress=101;
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
// .........................................................................
// .........................................................................  

// ........................for 60%.................................................
// ........................for 6%.................................................  
useEffect(() => {
  let  progressStartvalue=0;
    const progress=setInterval(()=>{
     
      let  stopProgress=41;
      progressStartvalue++;
      if(progressStartvalue==stopProgress){
       //Clearing the interval
       clearInterval(progress);
      }
      else{
        
        progress_value_garcon.current.innerHTML=`${progressStartvalue}%`;
        circular_progress_garcon.current.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue * 3.6}deg,#e9e0e0 0deg)`

      }

    },100);
 
    return () => clearInterval(progress);
  
}, [circular_progress,progress_value]);
 // ..............................for fille...........................................
// .........................................................................   
useEffect(() => {
  let  progressStartvalue=0;
    const progress=setInterval(()=>{
     
      let  stopProgress=61;
      progressStartvalue++;
      if(progressStartvalue==stopProgress){
       //Clearing the interval
       clearInterval(progress);
      }
      else{
        
        progress_value_fille.current.innerHTML=`${progressStartvalue}%`;
        circular_progress_fille.current.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue * 3.6}deg,#e9e0e0 0deg)`

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
            <nav>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Annonces</p>
            </nav>
          
          </div>
          <div>
            <nav>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Finance</p>
            </nav>
          
          </div>
          <div>
            <nav>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Eleves</p>
            </nav>
          
          </div>
          <div>
            <nav>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Enseignants</p>
            </nav>
          
          </div>
          <div>
            <nav>
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Mon compt</p>
            </nav>
          
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
            <div className='all_com' ref={all_communication_div}>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1.2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
       <SwiperSlide><div className='cominique' >
            <p><strong>Communiqué du 2024-04-08 21:30:08</strong>
            <strong>Rappel des Consignes et Soutien pour une Année Réussie</strong>
            Chers Élèves, Nous espérons que vous vous porte...</p>
            <button>lire plus</button>
          </div></SwiperSlide>
      <SwiperSlide><div className='cominique' >
            <p><strong>Communiqué du 2024-04-08 21:30:08</strong>
            <strong>Rappel des Consignes et Soutien pour une Année Réussie</strong>
            Chers Élèves, Nous espérons que vous vous porte...</p>
            <button>lire plus</button>
          </div></SwiperSlide>
      <SwiperSlide><div className='cominique' >
            <p><strong>Communiqué du 2024-04-08 21:30:08</strong>
            <strong>Rappel des Consignes et Soutien pour une Année Réussie</strong>
            Chers Élèves, Nous espérons que vous vous porte...</p>
            <button>lire plus</button>
          </div></SwiperSlide>
      <SwiperSlide><div className='cominique' >
            <p><strong>Communiqué du 2024-04-08 21:30:08</strong>
            <strong>Rappel des Consignes et Soutien pour une Année Réussie</strong>
            Chers Élèves, Nous espérons que vous vous porte...</p>
            <button>lire plus</button>
          </div></SwiperSlide> 
      ...
    </Swiper>
       
            </div>
         
          <div className='pages_of_com'>
           <nav><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
           <nav><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
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
              <nav className='circular_progress' ref={circular_progress_garcon}>
                       <span className='progress_value' ref={progress_value_garcon}>40%</span>
                  </nav>
                </div>
                <div>
                <nav className='icon_nav'><FontAwesomeIcon icon={faEnvelope} className='icon'/></nav>
                <nav className='circular_progress'ref={circular_progress_fille}>
                       <span className='progress_value'ref={progress_value_fille}>100%</span>
                  </nav>
                </div>
              
            </div>
          </div>
        
        </section>
      </section>
      
  )
}

export default App
