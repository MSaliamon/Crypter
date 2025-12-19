import './Section3.scss'
import bird from '../../../assets/homepage/png/bird.png'
import austine from '../../../assets/homepage/svg/austin-wade.svg'
import small1 from '../../../assets/homepage/png/small1.png'
import emptiness from '../../../assets/homepage/png/emptiness.png'
import small2 from '../../../assets/homepage/png/small2.png'
import austine1 from '../../../assets/homepage/svg/austin-wade1.svg'
function Section3() {
  return (
    <section className="section3">
        <div className="section3-container">
            <img src={bird} alt="bird" className="section3-container__img" />
            <div className="section3-box">
                <div className="section3-avatar">
                    <img src={austine} alt="austine" className="section3-avatar__img" />
                    <div className="section3-avatar__textbox">
                        <h1 className="section3-avatar__textbox-title">The future of ETH®</h1>
                        <p className="section3-avatar__textbox-text">18 in stock</p>
                    </div>
                </div>
                <div className="section3-price">
                    <p className="section3-price__text">Highest bid</p>
                    <div className="section3-price__wrap">
                        <p className="section3-price__wrap-text">1.125 ETH</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section3-container2">
            <div className="section3-box">
                <div className="section3-box__cont">
                    <img src={small1} alt="small1" className="section3-box__cont-img" />
                    <div className="section3-box__cont-info">
                        <p className="section3-box__cont-info-text">ETH never die</p>
                        <div className="section3-box__cont-info-avatar">
                            <img src={austine1} alt="austine1" className="section3-box__cont-info-avatar-img" />
                            <div className="section3-box__cont-info-avatar-wrap">
                                <p className="section3-box__cont-info-avatar-text">0.27 ETH</p>
                            </div>
                            <p className="section3-box__cont-info-avatar-count">1 of 12</p>
                        </div>
                        <button className="section3-box__cont-info-btn button2">Place a bid</button>
                    </div>
                </div>
                <div className="section3-box__cont">
                    <img src={emptiness} alt="emptiness" className="section3-box__cont-img" />
                    <div className="section3-box__cont-info">
                        <p className="section3-box__cont-info-text">Future coming soon</p>
                        <div className="section3-box__cont-info-avatar">
                            <img src={austine1} alt="austine1" className="section3-box__cont-info-avatar-img" />
                            <div className="section3-box__cont-info-avatar-wrap">
                                <p className="section3-box__cont-info-avatar-text">0.27 ETH</p>
                            </div>
                            <p className="section3-box__cont-info-avatar-count">1 of 3</p>
                        </div>
                        <button className="section3-box__cont-info-btn button2">Place a bid</button>
                    </div>
                </div>
                <div className="section3-box__cont">
                    <img src={small2} alt="small2" className="section3-box__cont-img" />
                    <div className="section3-box__cont-info">
                        <p className="section3-box__cont-info-text">Elon Musk silver coin 3d print</p>
                        <div className="section3-box__cont-info-avatar">
                            <img src={austine1} alt="austine1" className="section3-box__cont-info-avatar-img" />
                            <div className="section3-box__cont-info-avatar-wrap">
                                <p className="section3-box__cont-info-avatar-text">0.27 ETH</p>
                            </div>
                            <p className="section3-box__cont-info-avatar-count">1 of 4</p>
                        </div>
                        <button className="section3-box__cont-info-btn button2">Place a bid</button>
                    </div>
                </div>
            </div>
            <div className="section3-box2">
                <p className="section3-box2__text">Latest upload from creators 🔥</p>
                <div className="section3-box2__avatar">
                    <img src={austine1} alt="austine1" className="section3-box2__avatar-img" />
                    <div className="section3-box2__avatar-textbox">
                        <p className="section3-box2__avatar-textbox-text">Payton Harris</p>
                        <p className="section3-box2__avatar-textbox-price">2.456 ETH</p>
                    </div>
                </div>
                <div className="section3-box2__avatar">
                    <img src={austine1} alt="austine1" className="section3-box2__avatar-img" />
                    <div className="section3-box2__avatar-textbox">
                        <p className="section3-box2__avatar-textbox-text">Anita Bins</p>
                        <p className="section3-box2__avatar-textbox-price">2.456 ETH</p>
                    </div>
                </div>
                <div className="section3-box2__avatar">
                    <img src={austine1} alt="austine1" className="section3-box2__avatar-img" />
                    <div className="section3-box2__avatar-textbox">
                        <p className="section3-box2__avatar-textbox-text">Joana Wuckert</p>
                        <p className="section3-box2__avatar-textbox-price">2.456 ETH</p>
                    </div>
                </div>
                <div className="section3-box2__avatar">
                    <img src={austine1} alt="austine1" className="section3-box2__avatar-img" />
                    <div className="section3-box2__avatar-textbox">
                        <p className="section3-box2__avatar-textbox-text">Lorena Ledner</p>
                        <p className="section3-box2__avatar-textbox-price">2.456 ETH</p>
                    </div>
                </div>
                <button className="section3-box2__btn button2">Discover more</button>
            </div>
        </div>
    </section>
  )
}

export default Section3