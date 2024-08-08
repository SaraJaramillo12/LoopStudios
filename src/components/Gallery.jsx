import '../sass/gallery.scss';
import deepearth from '../assets/images/desktop/image-deep-earth.jpg';
import nightarcade from '../assets/images/desktop/image-night-arcade.jpg';
import soccerteam from '../assets/images/desktop/image-soccer-team.jpg';
import grid from '../assets/images/desktop/image-grid.jpg';
import fromUp from '../assets/images/desktop/image-from-above.jpg';
import pocketborealis from '../assets/images/desktop/image-pocket-borealis.jpg';
import curiosity from '../assets/images/desktop/image-curiosity.jpg';
import fisheye from '../assets/images/desktop/image-fisheye.jpg';

const imagenes = [
    { title: "DEEP EARTH", image: deepearth },
    { title: 'NIGH ARCADE', image: nightarcade },
    { title: "SOCCER TEAM", image: soccerteam },
    { title: "GRID", image: grid },
    { title: "FROM UP ABOVE VR", image: fromUp },
    { title: "POCKET BOREALIS", image: pocketborealis },
    { title: "THE CURIOSITY", image: curiosity },
    { title: "MAKE IT FISHEYE", image: fisheye },
]

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery__intro">
                <h2 className="gallery__title">OUR CREATIONS</h2>
                <button>SEE ALL</button>
            </div>
            <section className='gallery__grid'>
            {imagenes.map((imagenes, index) => (
                <div key={index} className="gallery__item">
                    <img src={imagenes.image} alt={imagenes.title} />
                    <h3 className="gallery__item-title">{imagenes.title}</h3>
                </div>
            ))}
            </section>
        </section>
    )
}

export default Gallery;