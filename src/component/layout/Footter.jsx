import anime from '../../assets/img/anime.gif'

function Footter() {

    const styles = {
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '33.3333%',
        paddingBottom: 0,
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform'
      };
      
      const srcUrl = encodeURIComponent('https://www.canva.com/design/DAFgORdFfP8/watch?embed');
      
    return ( 

        <div class="footer ">

           <img className='img-fluid p-2' src={anime} alt="img-fotter" />

        
              
        </div>
     );
}

export default Footter;