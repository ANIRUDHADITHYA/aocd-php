import {Link} from "react-router-dom";
import './AboutUs.css';

import { Player } from '@lottiefiles/react-lottie-player';


function AboutUs(){
    const scrollTop =() => {
        window.scroll({top:0, behavior: 'smooth'})
    }
    return(
        <section className="aboutus">
        <div class="row">
            <div class="about-col">
                <h1>ABOUT <span>US</span></h1>
                <p>AOCD delivers a comprehensive resource on botanicals isolated from plant source(s) 
                and its classification. It also includes compounds derived from Marine seaweeds; 
                Microbial source that are found to have potent source of inhibition targeting obesity.</p>
                <Link to='/about-us' className="hero-btn red-btn" onClick={scrollTop}>KNOW MORE</Link>                    
            </div>
            <div class="about-col">
            
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_0bzu9jvt.json"
                style={{width: '100%' }}>
            </Player>
                </div>
        </div>
        </section>
    )
}

export default AboutUs;