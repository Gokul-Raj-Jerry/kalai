import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const TermsPage = (props) => {

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'Terms & Conditions'} pagesub={'Terms & Conditions'} />
            <section className="wpo-terms-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-terms-wrap">
                                <div className="wpo-terms-text">
                                    <h2>Training Course Agreement and Guidelines</h2>
                                    <ol>
                                        <li>Lessons are led by qualified instructors. Participants must adhere to scheduled class timings.</li>
                                        <li>Each student is entitled to 4/8 classes, depending on the chosen schedule, with each session lasting 55 minutes. </li>
                                        <li>Students are expected to maintain discipline and cleanliness on the premises at all times.</li>
                                        <li>A non-refundable registration fee is required to complete enrollment.</li>
                                        <li>Payment options include cash or approved online methods facilitated by the training center.</li>
                                        <li>Class commencement is subject to full payment of admission and training fees. Training fees are due in full by the 5th of each month and are non-refundable.</li>
                                        <li>The training center observes all Indian public holidays. </li>
                                        <li>In the event of an instructor's unavailability for a scheduled lesson, students will either be taught by a substitute instructor or offered a makeup session or credit for the next term. </li>
                                        <li>Students unable to attend consecutive lessons due to illness, travel, or special circumstances must inform center staff promptly to arrange compensation.</li>
                                        <li>A missed lesson, regardless of the reason, cannot be credited or transferred. It will be considered forfeited.</li>
                                        <li>The student is liable for any damage caused to the training center's property, instruments, or equipment.</li>
                                        <li>In case of pandemic lockdowns or unforeseen events leading to class closure, missed sessions will carry forward to the subsequent semester. Fees paid for these sessions are non-refundable.</li>
                                        <li>Students must adhere to COVID-19 safety measures, including wearing masks and maintaining social distancing.</li>
                                        <li>KALAI Training Center maintains stringent COVID-secure protocols for all face-to-face lessons. Visitors and students must adhere to guidelines, including: 
                                            <ul>
                                                <section>a. Social distancing </section>
                                                <section>b. Mask-wearing</section>
                                                <section>c. Hand sanitization before each lesson</section><br/>
                                                <h5>Refraining from visiting if experiencing:</h5>
                                                <section>a.	High temperature</section>
                                                <section>b.	Continuous cough</section>
                                                <section>c.	Loss of taste or smell</section>
                                            </ul>
                                        </li>
                                        <li>Payment of fees indicates acceptance of KALAI Training Center's terms and conditions, and agreement to comply with them.</li>
                                    </ol>
                                    
                                    <section>Please also see:</section>
                                    <p>Force Majeure Event - Within this Agreement, 'Force Majeure Event' refers to any occurrence beyond the reasonable control of the KALAI Training Center, encompassing strikes, lockouts, utility failures, acts of God, war, civil disturbances, governmental mandates, accidents, machinery breakdowns, natural disasters, or supplier/subcontractor defaults.</p>
                                    <ul>
                                        <li>The KALAI Training Center shall not be held liable for any delay or failure to fulfill its obligations arising from a Force Majeure Event.</li>
                                        <li>If a Force Majeure Event prevents the KALAI Training Center from providing services and/or goods for more than one week, KALAI reserves the right, without limiting its other rights or remedies, to terminate this Agreement.</li>
                                        <li>I acknowledge that I have read and agree to abide by the terms and conditions of the KALAI Training Center.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </div>

    )
}

export default TermsPage;