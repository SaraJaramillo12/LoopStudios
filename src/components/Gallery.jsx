import '../sass/gallery.scss';
import { useEffect, useState } from 'react';
// desktop
import deepearth from '../assets/images/desktop/image-deep-earth.jpg';
import nightarcade from '../assets/images/desktop/image-night-arcade.jpg';
import soccerteam from '../assets/images/desktop/image-soccer-team.jpg';
import grid from '../assets/images/desktop/image-grid.jpg';
import fromUp from '../assets/images/desktop/image-from-above.jpg';
import pocketborealis from '../assets/images/desktop/image-pocket-borealis.jpg';
import curiosity from '../assets/images/desktop/image-curiosity.jpg';
import fisheye from '../assets/images/desktop/image-fisheye.jpg';
// mobile
import deepEarth from '../assets/images/mobile/image-deep-earth.jpg'
import nightArcade from '../assets/images/mobile/image-night-arcade.jpg'
import soccerTeamg from '../assets/images/mobile/image-soccer-team.jpg'
import Grid from '../assets/images/mobile/image-grid.jpg'
import FromUp from '../assets/images/mobile/image-from-above.jpg'
import pocketBorealis from '../assets/images/mobile/image-pocket-borealis.jpg'
import Curiosity from '../assets/images/mobile/image-curiosity.jpg'
import Fisheye from '../assets/images/mobile/image-fisheye.jpg'


const imagenes = [
    { title: "DEEP EARTH", image: deepearth, img: deepEarth },
    { title: 'NIGH ARCADE', image: nightarcade, img: nightArcade},
    { title: "SOCCER TEAM", image: soccerteam, img: soccerTeamg },
    { title: "GRID", image: grid, img: Grid },
    { title: "FROM UP ABOVE VR", image: fromUp, img: FromUp },
    { title: "POCKET BOREALIS", image: pocketborealis, img: pocketBorealis },
    { title: "THE CURIOSITY", image: curiosity, img: Curiosity },
    { title: "MAKE IT FISHEYE", image: fisheye, img: Fisheye},
]

const Gallery = () => {
    const [widthScreen, setWidthScreen] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileBreakpoint = 400;

    return (
        <section className="gallery">
            <div className="gallery__intro">
                <h2 className="gallery__title">OUR CREATIONS</h2>
                <button>SEE ALL</button>
            </div>
            <section className="gallery__grid">
                {imagenes.map((imagen, index) => {
                    const imageSrc = widthScreen > mobileBreakpoint ? imagen.image : imagen.img;
                    return (
                        <div key={index} className="gallery__item">
                            <img src={imageSrc} alt={imagen.title} />
                            <h3 className="gallery__item-title">{imagen.title}</h3>
                        </div>
                    );
                })}
            </section>
        </section>
    );
};

export default Gallery;