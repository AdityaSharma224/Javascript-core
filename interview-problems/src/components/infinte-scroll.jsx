import React, { useState, useRef, useEffect, Children } from 'react'

const InfinteScroll = () => {
    const [count, setCount] = useState(50);

    useEffect(() => {

        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30) {
                setCount(count + 50);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [count]);

    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(<div key={i}>{i + 1}</div>);
    }

    return (
        <>
            {elements}
        </>
    )
}

export default InfinteScroll;


// window.innerHeight → Viewport height
// window.scrollY → How far the user has scrolled
// document.body.offsetHeight → Full page height
// If the sum of scrollY and innerHeight is within 30px of the total page height, load more elements.