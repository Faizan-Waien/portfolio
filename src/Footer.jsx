import { useContext } from "react";
import Contact from "./Contact"
import { SliderContext } from "./SliderContext";

const Footer = () => {

    const { slider, setSlider } = useContext(SliderContext)

    const ScrDOWN = () => {
        setTimeout(() => { document.getElementById('hide').style.display = 'block' }, 900);
        document.getElementById('banner').style.height = '583px';
        document.getElementById('header').style.width = '100%';
        document.getElementById('contactBox').style.display = 'none';
        document.getElementById('navbar').style.right = '-312px';
        setSlider(false)
    }

    return (
        <div className={slider ? 'slider' : 'close'}>

            <div className='footer'>

                <div className='foot1'>

                    <div id='contactBox' style={{ display: "none" }}>
                        <Contact />
                    </div>

                    <div className='foot1a'>
                        <span>© Copyright 2023 - Faizan Waien</span>
                    </div>

                </div>

                <div className='scroll' >
                    {slider ?
                        <h1 onClick={ScrDOWN}>&#11167;</h1>
                        : <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&#11165;</h1>
                    }
                </div>

            </div>
        </div>
    )
}

export default Footer