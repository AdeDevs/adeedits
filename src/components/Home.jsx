import { NavLink } from "react-router-dom";
import blurry from "../assets/esther.webp";
import winterBg from "../assets/mayo.webp";
import potrait from "../assets/smug.webp";
import road from "../assets/road.jpg";
import bridge from "../assets/bridge.webp";
import mosque from "../assets/mosque.webp";
import morning from "../assets/morning.webp";
import pose from "../assets/pose.webp";
import ayo from "../assets/ayo.webp";
import face from "../assets/face.webp";
import close from "../assets/close-up.webp";
import gaff from "../assets/gaff.webp";

export default function HomePage() {
    return (
        <div className="home-page">
            <header className="home-hero">
                <h6>adedevs</h6>
                <section className="about">
                    <div className="about-bg"></div>
                    <div className="about-info">
                        <h1>Nigeria-based Photography by Adeyemi</h1>
                        <section className="about-foot">
                            <p>
                                Adeyemi is an Nigeria based mobile photographer, creating/capturing the beauty in nature and people. His juxtaposition between light and shadow punctuates his signature style. Adeyemi believes photos are metaphors, making the abstract concrete and mystifying the mundane.
                            </p>
                            <p className="link"><NavLink to="/information">About Adeyemi</NavLink></p>
                        </section>
                    </div>
                </section>
            </header>
            <main className="home-main">
                <section className="winter-collection">
                    <div className="winter">
                        <div className="winter-info">
                            <h1>concrete stories</h1>
                            <div className="winter-foot">
                                <p>
                                Portraits can turn ordinary spaces into quiet stages. This series focuses on presence — the texture, the expression, the moment. Three frames, simple but intentional. As my work grows, the story will too. For now, it just needs to feel true.
                                </p>
                                <p><NavLink to="/gallery">view full gallery</NavLink></p>
                                <div className="winter-blurry">
                                    <img src={blurry} alt="model" />
                                </div>
                            </div>
                        </div>
                        <div className="winter-bg">
                            <img src={winterBg} alt="model" />
                        </div>
                    </div>
                    <div className="winter-potrait">
                        <img src={potrait} alt="model" />
                    </div>
                </section>
                <div className="fall-collection">
                    <div className="item item-1">
                        <h1>close-up collection</h1>
                        <div>
                            <p>
                            Portraits are little worlds of their own — simple expressions that suddenly feel deeper when you’re close enough. I try not to force anything; I just follow the moment and let it speak. This set brings together five close-up shots of three models, each one holding a quiet piece of who they are.
                            </p>
                            <p><NavLink href="/gallery">View full gallery</NavLink></p>
                        </div>
                    </div>
                    <div className="item item-2">
                        <img src={pose} alt="model" />
                    </div>
                    <div className="item item-3">
                        <img src={ayo} alt="model" />
                    </div>
                    <div className="item item-4">
                        <img src={face} alt="model" />
                    </div>
                    <div className="item item-5">
                        <img src={close} alt="model" />
                    </div>
                    <div className="item item-6">
                        <img src={gaff} alt="model" />
                    </div>
                </div>
                <div className="still-collection">
                    <div className="still still-1">
                        <h1>still collection</h1>
                        <div>
                            <p>
                                Photos are metaphors, making the abstract concrete and mystifying the mundane. Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself.
                            </p>
                            <p><NavLink href="/gallery">View full gallery</NavLink></p>
                        </div>
                    </div>
                    <div className="still still-2">
                        <img src={road} alt="model" />
                    </div>
                    <div className="still still-3">
                        <img src={bridge} alt="model" />
                    </div>
                    <div className="still still-4">
                        <img src={mosque} alt="model" />
                    </div>
                    <div className="still still-5">
                        <img src={morning} alt="model" />
                    </div>
                </div>
            </main>
        </div>
    )
}