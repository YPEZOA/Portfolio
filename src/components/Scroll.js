import React from 'react'
import '../styles/scroll.css';

const Scroll = () => {

    const scrollToPage = () => {
        window.onscroll = () => {
            const longitude = window.scrollY;
            const arrowTop = document.querySelector('#arrow');
            console.log(longitude);
            longitude > 400 ? arrowTop.classList.remove('hidde') : arrowTop.classList.add('hidde');
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <div className="container-scroll">
            <span className="material-icons hidde" id="arrow" onScroll={scrollToPage()} onClick={e => scrollToTop(e)}>
                keyboard_arrow_up
            </span>
        </div>
    )
}

Scroll.displayName = 'Scroll';

export default Scroll;