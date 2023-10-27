import '../../assets/styles/header.css'

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Header() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <header>
                <h3>
                    Publish your ideas
                </h3>
            <Particles
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    maxHeight:"100vh",
                }}
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: false,
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            repulse: {
                                distance: 30,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#00c280", "#bf00ff", "#00e1ff"],
                        },
                        opacity: {
                            value: 0.6,
                        },

                        links: {
                            color: "#ff0266",
                            distance: 140,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },

                    },

                }}
            />
            </header>
        </div>

    );
}

export default Header;
