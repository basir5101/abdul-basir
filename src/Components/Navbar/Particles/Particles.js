import React from 'react';

const Particles = () => {
    return (
        <div>
             <Particles width='100vw' height="100vh" className = 'particle' style = {{position: 'absolute', zIndex: '-1' , background: 'black', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '100%'}}
                    params={{
                        particles: {
                        color: {
                            value: "#ffdd40"
                        },
                        line_linked: {
                            color: {
                            value: "#ffdd40"
                            }
                        },
                        number: {
                            value: 60
                        },
                        size: {
                            value: 4
                        }
                        }
                }}
            />
        </div>
    );
};

export default Particles;