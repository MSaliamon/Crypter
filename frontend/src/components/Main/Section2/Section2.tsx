import './Section2.scss'
import nft from '../../../assets/homepage/png/nft1.png'
import avatar from '../../../assets/homepage/png/avatar1.png'
import user from '../../../assets/homepage/svg/user.svg'
function Section2() {
  return (
    <section className="section2">
        <img src={nft} alt="nft" className="section2__img" />
        <div className="section2-container">
            <h2 className="section2-container__title">the creator network®</h2>
            <div className="section2-wrap">
                <div className="section2-box">
                    <img src={avatar} alt="avatar" className="section2-box__img" />
                    <div className="section2-box__cont">
                        <p className="section2-box__cont-text">Creator</p>
                        <p className="section2-box__cont-text2">Enrico Cole</p>
                    </div>
                </div>
                <div className="section2-box">
                    <img src={user} alt="user" className="section2-box__img" />
                    <div className="section2-box__cont">
                        <p className="section2-box__cont-text">Instant price</p>
                        <p className="section2-box__cont-text2">3.5 ETH</p>
                    </div>
                </div>
            </div>
            <div className="section2-wrap2">
                <div className="section2-textbox">
                    <p className="section2-textbox__text1">Current Bid</p>
                    <p className="section2-textbox__price">1.00 ETH</p>
                </div>
                <div className="section2-timer">
                    <p className="section2-timer__text">Auction ending in</p>
                    <div className="section2-timer__time">
                        <div className="section2-timer__time-cont">
                            <p className="section2-timer__time-cont-text1">24</p>
                            <p className="section2-timer__time-cont-text2">Hrs</p>
                        </div>
                        <div className="section2-timer__time-cont">
                            <p className="section2-timer__time-cont-text1">00</p>
                            <p className="section2-timer__time-cont-text2">mins</p>
                        </div>
                        <div className="section2-timer__time-cont">
                            <p className="section2-timer__time-cont-text1">00</p>
                            <p className="section2-timer__time-cont-text2">secs</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="section2__btn button">Place a bid</button>
        </div>
    </section>
  )
}

export default Section2