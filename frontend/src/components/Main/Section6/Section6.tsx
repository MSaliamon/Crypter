import './Section6.scss'
import collection1 from '../../../assets/homepage/png/collection1.png'
import collection2 from '../../../assets/homepage/png/collection2.png'
import collection3 from '../../../assets/homepage/png/collection3.png'
import collection4 from '../../../assets/homepage/png/collection4.png'
import collection5 from '../../../assets/homepage/png/collection5.png'
import collection6 from '../../../assets/homepage/png/collection6.png'
import collection7 from '../../../assets/homepage/png/collection7.png'
import collection8 from '../../../assets/homepage/png/collection8.png'
import collection9 from '../../../assets/homepage/png/collection9.png'
import collection10 from '../../../assets/homepage/png/collection10.png'
import collection11 from '../../../assets/homepage/png/collection11.png'
import collection12 from '../../../assets/homepage/png/collection12.png'
import kenn from '../../../assets/homepage/svg/kenn.svg'
function Section6() {
  return (
    <section className="section6">
        <h2 className="section6__title">Hot collections</h2>
        <div className="section6-container">
            <div className="section6-box">
                <img src={collection1} alt="collection" className="section6-box__img" />
                <div className="section6-box__imgs">
                    <img src={collection2} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection3} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection4} alt="collection" className="section6-box__imgs-img" />
                </div>
                <p className="section6-box__text">Awesome collection</p>
                <div className="section6-box__cont">
                    <div className="section6-box__cont-autor">
                        <img src={kenn} alt="kenn" className="section6-box__cont-autor-img" />
                        <p className="section6-box__cont-autor-name">By Kennith Olson</p>
                    </div>
                    <div className="section6-box__cont-count">
                        <p className="section6-box__cont-count-text">28 items</p>
                    </div>
                </div>
            </div>
            <div className="section6-box">
                <img src={collection5} alt="collection" className="section6-box__img" />
                <div className="section6-box__imgs">
                    <img src={collection6} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection7} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection8} alt="collection" className="section6-box__imgs-img" />
                </div>
                <p className="section6-box__text">Awesome collection</p>
                <div className="section6-box__cont">
                    <div className="section6-box__cont-autor">
                        <img src={kenn} alt="kenn" className="section6-box__cont-autor-img" />
                        <p className="section6-box__cont-autor-name">By Kennith Olson</p>
                    </div>
                    <div className="section6-box__cont-count">
                        <p className="section6-box__cont-count-text">28 items</p>
                    </div>
                </div>
            </div>
            <div className="section6-box">
                <img src={collection9} alt="collection" className="section6-box__img" />
                <div className="section6-box__imgs">
                    <img src={collection10} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection11} alt="collection" className="section6-box__imgs-img" />
                    <img src={collection12} alt="collection" className="section6-box__imgs-img" />
                </div>
                <p className="section6-box__text">Awesome collection</p>
                <div className="section6-box__cont">
                    <div className="section6-box__cont-autor">
                        <img src={kenn} alt="kenn" className="section6-box__cont-autor-img" />
                        <p className="section6-box__cont-autor-name">By Kennith Olson</p>
                    </div>
                    <div className="section6-box__cont-count">
                        <p className="section6-box__cont-count-text">28 items</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section6