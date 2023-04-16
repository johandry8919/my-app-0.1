import { useEffect, useState } from 'react';
import Footter from './layout/Footter';
import logo1 from '../assets/img/programador.gif';
import logo2 from '../assets/img/programador2.gif';
import logo3 from '../assets/img/programador 3.gif';
import ReCAPTCHA from 'react-google-recaptcha';

import '../component/header/Header.css'




function Home() {

  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [isVerified, setIsVerified] = useState(false);



    const [images, setImages] = useState([logo1, logo2, logo3]);
    const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images, currentImage]);

  const handleRecaptcha = (response) => {
    if (response) {
      setIsVerified(true);
    }
  }



  const enviarMensaje = () => {
    const mensaje2 = `Nuevo mensaje de ${correo} nombre: ${nombre} Menaje: ${mensaje}`;
    const TOKEN = '6158377987:AAESF42hcjU7uLYRjGjGi-rsjMtPuLq_Igw'
    const CHAT_ID = '6021886971';
    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${mensaje2}`)
      .then(response => {
        // Muestra la alerta de éxito
        const alerta = document.getElementById('alerta');
        alerta.classList.remove('d-none');
        alerta.style.opacity = 1;

        // Oculta la alerta después de 5 segundos
        setTimeout(() => {
        alerta.style.opacity = 0;
        setTimeout(() => {
            alerta.classList.add('d-none');
            setCorreo('');
             setMensaje('');
            
             location.reload()
            
        }, 500);
        }, 2000);

            })
      .catch(error => console.error(error));
  };

  const handleSubmit = e => {
    e.preventDefault();

      if (isVerified) {
        // Realiza la acción de envío del formulario
        enviarMensaje();
      } else {
        // Muestra un mensaje de error al usuario
        alert('Por favor, verifica que eres un humano');
      }
  };



  return (  
    <div className=' m-auto mt-4 Headers'>

          <div id="alerta" className="alert alert-success d-none text-center" role="alert">
                Mensaje enviado correctamente.
          </div>
      <section className='card container text-uppercase '>
        <div className='card-header text-center bg-dark text-white'>
          <h2 className="p-0 m-0">CONTACTAME DISPONIBLE LA 24 HR</h2>
        </div>
        <div className="p-2">
          <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <img
                className={`img-fluid animate__animated animate__backInLeft ${currentImage === currentImage ? 'active' : ''} transition-img`}
                src={images[currentImage]}
                alt="logo"
            />
            </div>
            <div className="col-12 col-md-6 textareas animate__animated animate__bounce " >
            <form onSubmit={handleSubmit}>



            <div className="mb-3">
                    <label htmlFor="sdfsd" className="form-label">Nombre</label>
                    <input  required type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}  className="form-control" id="" placeholder="Escribe tu nombre"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Tu correo</label>
                    <input  required type="email"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}  className="form-control" id="exampleFormControlInput1" placeholder="correo"/>
                    </div>

                    
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Contactame</label>
                    <textarea required value={mensaje}
                    onChange={e => setMensaje(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptcha}
                    className='recaptcha'
                    
      />
                    <button className='btn btn-primary w-100 mt-2' type="submit">Enviar</button>

             </form>


            </div>
          </div>
        </div>
        <hr />
        <div className='footter mt-5'>
          <Footter/>
        </div>
      </section>
    </div>
  );

  
}

export default Home;
