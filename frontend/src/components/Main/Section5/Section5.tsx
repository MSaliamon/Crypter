import './Section5.scss'
import avatar1 from '../../../assets/homepage/svg/avatar1.svg'
import avatar2 from '../../../assets/homepage/svg/avatar2.svg'
import avatar3 from '../../../assets/homepage/svg/avatar3.svg'
import art1 from '../../../assets/homepage/png/art1.png'
import art2 from '../../../assets/homepage/png/art2.png'
import art3 from '../../../assets/homepage/png/art3.png'
function Section5() {
  return (
    <section className="section5">
        <h2 className="section5__title">Hot bid</h2>
        <div className="section5-container">
            <div className="section5-box">
              <img src={art1} alt="art" className="section5-box__img"/>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text">Amazing digital art</p>
                  <div className="section5-box__cont-price">
                    <p className="section5-box__cont-price-text">2.45 ETH</p>
                  </div>
                </div>
                <div className="section5-box__cont">
                  <div className="section5-box__cont-imgs">
                    <img src={avatar1} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar2} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar3} alt="avatar" className="section5-box__cont-imgs-img" />
                  </div>
                  <p className="section5-box__cont-text2">3 in stock</p>
                </div>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text2">Highest bid 0.001 ETH</p>
                  <button className="section5-box__cont-button">New bid</button>
                </div>
            </div>
            <div className="section5-box">
              <img src={art2} alt="art" className="section5-box__img"/>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text">Amazing digital art</p>
                  <div className="section5-box__cont-price">
                    <p className="section5-box__cont-price-text">2.45 ETH</p>
                  </div>
                </div>
                <div className="section5-box__cont">
                  <div className="section5-box__cont-imgs">
                    <img src={avatar1} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar2} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar3} alt="avatar" className="section5-box__cont-imgs-img" />
                  </div>
                  <p className="section5-box__cont-text2">3 in stock</p>
                </div>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text2">Highest bid 0.001 ETH</p>
                  <button className="section5-box__cont-button">New bid</button>
                </div>
            </div>
            <div className="section5-box">
              <img src={art3} alt="art" className="section5-box__img"/>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text">Amazing digital art</p>
                  <div className="section5-box__cont-price">
                    <p className="section5-box__cont-price-text">2.45 ETH</p>
                  </div>
                </div>
                <div className="section5-box__cont">
                  <div className="section5-box__cont-imgs">
                    <img src={avatar1} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar2} alt="avatar" className="section5-box__cont-imgs-img" />
                    <img src={avatar3} alt="avatar" className="section5-box__cont-imgs-img" />
                  </div>
                  <p className="section5-box__cont-text2">3 in stock</p>
                </div>
                <div className="section5-box__cont">
                  <p className="section5-box__cont-text2">Highest bid 0.001 ETH</p>
                  <button className="section5-box__cont-button">New bid</button>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Section5