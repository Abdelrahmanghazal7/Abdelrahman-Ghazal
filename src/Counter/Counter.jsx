import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css'

const Counter = () => {
    const [counterOn, setCpunterOn] = useState(false);
    return (

        <ScrollTrigger on onEnter={() => setCpunterOn(true)} onExit={() => setCpunterOn(false)}>
            <div className='counter' style={{ backgroundImage: "url(images/bg_banner.gif)" }}>
                <h1>
                    {counterOn && <CountUp start={0} end={7} duration={2} delay={0} />}
                    <span className='text'>Clients</span>
                </h1>

                <h1>
                    {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                    <span className='text'>Project Compleate</span>
                </h1>

                <h1>
                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}
                    <span className='text'>Project Ongoing</span>
                </h1>

                <h1>
                    {counterOn && <CountUp start={0} end={95} duration={2} delay={0} />}
                    <span className='text'>Client Satisfaction</span>
                </h1>
            </div>
        </ScrollTrigger>
    )
}

export default Counter