import './Section4.scss'
import ArrowLeft from '../../../assets/homepage/svg/ArrowLeft.svg'
import Edd from '../../../assets/homepage/svg/Edd.svg'
import Marlee from '../../../assets/homepage/svg/Marlee.svg'
import Kunde from '../../../assets/homepage/svg/Kunde.svg'
import Backridge from '../../../assets/homepage/svg/Buckridge.svg'
import ArrowRight from '../../../assets/homepage/svg/ArrowRight.svg'
function Section4() {
  return (
    <section className="section4">
      <div className="section4-container">
        <h2 className="section4-container__title">Popular</h2>
        <select name="date" id="1" className="section4-container__select">
          <option value="Today">Today</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <div className="section4-container2">
        <img src={ArrowLeft} alt="ArrowLeft" className="section4-container2__arrow" />
        <div className="section4-wrap">
          <div className="section4-box">
            <img src={Edd} alt="Edd" className="section4-box__img" />
            <p className="section4-box__name">Edd Harris</p>
            <p className="section4-box__price">2.456 ETH</p>
          </div>
          <div className="section4-box">
            <img src={Marlee} alt="Marlee" className="section4-box__img" />
            <p className="section4-box__name">Marlee Kuphal</p>
            <p className="section4-box__price">2.456 ETH</p>
          </div>
          <div className="section4-box">
            <img src={Kunde} alt="Kunde" className="section4-box__img" />
            <p className="section4-box__name">Payton Kunde</p>
            <p className="section4-box__price">2.456 ETH</p>
          </div>
          <div className="section4-box">
            <img src={Backridge} alt="Backridge" className="section4-box__img" />
            <p className="section4-box__name">Payton Backridge</p>
            <p className="section4-box__price">2.456 ETH</p>
          </div>
        </div>
        <img src={ArrowRight} alt="ArrowRight" className="section4-container2__arrow" />
      </div>
    </section>
  )
}

export default Section4