import visor from '../assets/images/desktop/image-interactive.jpg';
import '../sass/section.scss';

const Section = () => {
    return(
        <section className='section-1'>
            <img  src={visor} alt="" />
            <div className='div1'>
                <h2>THE LEADER IN <br></br> INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class <br></br> virtual reality projects for some of the best companies around the <br></br> globe. Our award-winning creations have transformed <br></br> businesses through digital experiences that bind to their brand.</p>
            </div>
        </section>
    );
}

export default Section;