import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const FaqSection = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className="wpo-benefits-section">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>Should I bring my own instrument to the music lessons? Can I choose two music courses at the same time?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, you can opt for two music courses at a time. Both your classes shall be structured in a way they do not clash. Get in touch with us for more information. Yes, You should bring your own instruments to the class. However, students are free to bring their own instruments, should they so choose.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>When to Use Ice or Heat for Injury Management? Which is better for losing weight: diet or exercise?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Choosing between ice and heat for injury management is a common dilemma. In general, if an injury is acute and characterized by swelling, applying ice is recommended. Ice helps reduce inflammation and alleviate pain. However, in the absence of swelling, heat therapy can be more beneficial. Heat enhances blood flow, promoting healing. The appropriate choice depends on the nature of the injury and its stage of healing. Controlling what you eat will make a greater impact on weight loss. Your energy intake has to be less than your energy expenditure. But it will take a combination of both diet and exercise to keep the weight off. Exercise will help you gain strength and stamina while sculpting the body.
                                <section>Without exercise, you can lose weight, but you also lose muscle, strength and endurance in the process.</section>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>Which martial art should I study?</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Find one you love! All the arts at KALAI are easy to start, and great for fitness, confidence and a winning attitude! Choose one that best fits your personality.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>Why choose KALAI?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                KALAI provides a wide range of skills and knowledge, including Martial Arts, Fitness, Nutrition, Music, and Sports. This variety allows you to pursue multiple interests under one roof, saving time and making it convenient to balance different aspects of personal growth and life style.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FaqSection;