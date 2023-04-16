import fondo from '../../assets/img/vedeis.mp4'

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

        <div class="footer">

            <div style={styles}>
                <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                src={decodeURIComponent(srcUrl)} allowFullScreen={true} allow="fullscreen" autoplay>
                </iframe>
            </div>
                    

            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFgORdFfP8&#x2F;watch?utm_content=DAFgORdFfP8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">programador full starck</a> de johandry

        
              
        </div>
     );
}

export default Footter;