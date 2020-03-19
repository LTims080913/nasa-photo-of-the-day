import React, { useState, useEffect } from "react";
import axios from "axios";
import "./featured.css"
import styled from 'styled-components'

const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const SmallImg = styled.img`
    width: 80%;
    height: 30vh;
    border: 5px solid gray;
    margin-top: 5%;
`;
const MinorCard = styled.div`
    width: 26%;
    background-color: #F4F4FF;
    box-shadow: 5px 5px gray;
    margin: 6% 0;
    opacity: 0.8;
`;
const Paragraph = styled.p`
    width: 100%;
    padding: 0 10% 5%;
`;
const APOD = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
const APODimg = styled.img`
    width: 68%;
    border: 6px solid darkblue;
    box-shadow: 8px 8px grey;
`;
const Right = styled.div`
    flex-direction: column;
    width: 45%;

`;
const Left = styled.div`
    flex-direction: column;
    width: 45%;
`;
const Page = styled.div`
    margin: 5%;
`;
const LeftH2 = styled.h2`
    font-size: 3rem;
`;
const LeftP = styled.p`
    font-weight: 700;
    font-size: 1rem;
    margin-top: 5%;
    color: darkblue;
`;


const Featured = () => {

    const [nasaPic, setNasaPic] = useState([]);


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=IdpyR2Fx9Gi4vfB59aVDGzohzX8wbEqYMRiIOQPO`)
            .then(response => {
                console.log(response.data)
                setNasaPic(response.data)
            })
            .catch(error => {
                console.log('My stars!', error);
            })
    }, [])

    return (
        <Page>
            <APOD>
                <Right>
                    <APODimg src={nasaPic.url} alt="NASA Astronomy Picture of the Day!" />
                    <h3 style={{marginTop: '3%'}}>{nasaPic.date}</h3>
                </Right>
                <Left>
                    <LeftH2>{nasaPic.title}</LeftH2>
                    <LeftP>{nasaPic.explanation}</LeftP>
                </Left>


            </APOD>
            <Bottom>
                <MinorCard>
                    <SmallImg src="https://www.nasa.gov/sites/default/files/thumbnails/image/ngc6357.jpg" alt="Cosmic Winter Wonderland" />
                    <h4>1990-09-27</h4>
                    <h4>Cosmic Winter Wonderland</h4>
                    <Paragraph>Lucas ipsum dolor sit amet windu ponda alderaan solo sidious qui-gonn mothma anakin darth dantooine. Windu gonk kamino padmé. Qui-gon jade jar solo. Dagobah mon c-3p0 dooku antilles endor hutt mon antilles. Antilles moff jabba dantooine calamari. Lando organa dooku hutt mace coruscant. Moff secura antilles wedge yoda leia solo organa ewok. Antilles jade lando moff yavin antilles jade binks. Hoth antilles skywalker coruscant utapau darth. Mandalorians ponda ben padmé grievous yoda wedge. Padmé skywalker greedo skywalker solo dagobah.</Paragraph>
                </MinorCard>
                <MinorCard>
                    <SmallImg src="https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1915a-m-1707x2000.png" alt="Southern Crab Nebula" />
                    <h4>2013-08-09</h4>
                    <h4>Southern Crab Nebula</h4>
                    <Paragraph>Mon darth kit mothma. Skywalker ben anakin jango sebulba wicket. Tusken raider skywalker moff c-3p0 coruscant owen jinn leia. Kamino luuke skywalker sith mace coruscant aayla mandalorians mon. Sidious leia wedge zabrak. R2-d2 hutt watto darth naboo solo c-3p0. Fett yoda jinn mon. Ahsoka mon skywalker skywalker kenobi wedge. Hutt skywalker chewbacca boba jade luuke. Watto cade tatooine wookiee darth mandalorians antilles. Ben darth jar grievous kessel tusken raider. Cade c-3p0 moff darth baba. Antilles qui-gonn fisto wedge.</Paragraph>
                </MinorCard>
                <MinorCard>
                    <SmallImg src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg" alt="Navigate Space Using Pulsars" />
                    <h4>1991-10-15</h4>
                    <h4>Navigate Space Using Pulsars</h4>
                    <Paragraph>Luke dooku darth mon kessel solo. Jade dantooine moff obi-wan wedge mon. Secura darth organa tatooine mon moff. Luke dantooine kessel antilles skywalker leia obi-wan dagobah jade. Windu kessel hutt darth solo c-3p0 moff. Secura skywalker organa amidala palpatine. Solo darth dagobah endor twi'lek. Darth palpatine obi-wan darth skywalker mace boba. Skywalker jawa vader darth thrawn aayla kamino droid. Ackbar antilles kashyyyk droid coruscant. Jade moff fett solo yavin han vader solo wedge. Coruscant maul kenobi darth yoda moff darth yoda mara.</Paragraph>
                </MinorCard>
            </Bottom>
        </Page>
    )

}



export default Featured