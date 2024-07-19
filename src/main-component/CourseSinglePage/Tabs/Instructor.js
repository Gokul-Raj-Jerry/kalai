import React from 'react'
import tsImg from '../../../images/at-single.jpg'
// import cImg1 from '../../../images/certificates/1.jpg'
// import cImg2 from '../../../images/certificates/2.jpg'
// import cImg3 from '../../../images/certificates/3.jpg'
// import cImg4 from '../../../images/certificates/4.jpg'

const Instructor = () => {
    return (
        <div className="team-info-wrap">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="team-info-img">
                        <img src={tsImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="team-info-img">
                        <img src={tsImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="team-info-img">
                        <img src={tsImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="team-info-img">
                        <img src={tsImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor;