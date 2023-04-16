import React from 'react';

import logo2 from '../assets/img/logo2.png'
import MyButton from '../component/MyButton/MyButton'
import '../component/header/Header.css'
import 'animate.css/animate.min.css';import 'animate.css/animate.min.css';
import Footter from './layout/Footter'



function Home() {
    const enviar = 'Enviar'
    return (  

        <div className=' m-auto mt-4   Headers'>




            <section className='card container text-uppercase'>

            <div className='card-header text-center'>
                <h1>Contactame  disponible la 24hr</h1>

            </div>
                <div className="p-2">
                    
                       <div className="row  justify-content-center ">


                        <div className="col-12 col-md-6">
                            <img
                              className="img-fluid animate__animated animate__backInLeft transition-img"
                              src={logo2}
                              alt="logo"
                            />
                          </div>


                        <div className="col-12 col-md-6 textareas animate__animated  animate__bounce">
                            <form action="">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Correo Electronico</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                  </div>
                                  <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Enviame un messaje</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                  </div>

                                  <MyButton MyButtons= {enviar}/>
                              
                            </form>

                         
                        </div>

                       </div>
                        
                </div>

            <div className='footter mt-5 '>
                <Footter/>
           </div>


            </section>

           

           


            
         
         </div>
    );
}

export default Home;