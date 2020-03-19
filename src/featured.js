import React, { useState, useEffect } from "react";
import axios from "axios";
import "./featured.css"

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
        <div className="featured">
            <div className="APOD">
                <div className="left">
                    <img className="APODimg" src={nasaPic.url} alt="NASA Astronomy Picture of the Day!" />
                    <h3>{nasaPic.date}</h3>
                </div>
                <div className="right">
                    <h2>{nasaPic.title}</h2>
                    <p>{nasaPic.explanation}</p>
                </div>


            </div>
            <div className="bottom">
                <div className="card">
                    <img className="small" src="https://www.nasa.gov/sites/default/files/thumbnails/image/ngc6357.jpg" alt="Cosmic Winter Wonderland" />
                    <h4>1990-09-27</h4>
                    <h4>Cosmic Winter Wonderland</h4>
                    <p className="p">Lucas ipsum dolor sit amet windu ponda alderaan solo sidious qui-gonn mothma anakin darth dantooine. Windu gonk kamino padmé. Qui-gon jade jar solo. Dagobah mon c-3p0 dooku antilles endor hutt mon antilles. Antilles moff jabba dantooine calamari. Lando organa dooku hutt mace coruscant. Moff secura antilles wedge yoda leia solo organa ewok. Antilles jade lando moff yavin antilles jade binks. Hoth antilles skywalker coruscant utapau darth. Mandalorians ponda ben padmé grievous yoda wedge. Padmé skywalker greedo skywalker solo dagobah.</p>
                </div>
                <div className="card">
                    <img className="small" src="https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1915a-m-1707x2000.png" alt="Southern Crab Nebula" />
                    <h4>2013-08-09</h4>
                    <h4>Southern Crab Nebula</h4>
                    <p className="p">Mon darth kit mothma. Skywalker ben anakin jango sebulba wicket. Tusken raider skywalker moff c-3p0 coruscant owen jinn leia. Kamino luuke skywalker sith mace coruscant aayla mandalorians mon. Sidious leia wedge zabrak. R2-d2 hutt watto darth naboo solo c-3p0. Fett yoda jinn mon. Ahsoka mon skywalker skywalker kenobi wedge. Hutt skywalker chewbacca boba jade luuke. Watto cade tatooine wookiee darth mandalorians antilles. Ben darth jar grievous kessel tusken raider. Cade c-3p0 moff darth baba. Antilles qui-gonn fisto wedge.</p>
                </div>
                <div className="card">
                    <img className="small" src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg" alt="Navigate Space Using Pulsars" />
                    <h4>1991-10-15</h4>
                    <h4>Navigate Space Using Pulsars</h4>
                    <p className="p">Luke dooku darth mon kessel solo. Jade dantooine moff obi-wan wedge mon. Secura darth organa tatooine mon moff. Luke dantooine kessel antilles skywalker leia obi-wan dagobah jade. Windu kessel hutt darth solo c-3p0 moff. Secura skywalker organa amidala palpatine. Solo darth dagobah endor twi'lek. Darth palpatine obi-wan darth skywalker mace boba. Skywalker jawa vader darth thrawn aayla kamino droid. Ackbar antilles kashyyyk droid coruscant. Jade moff fett solo yavin han vader solo wedge. Coruscant maul kenobi darth yoda moff darth yoda mara.</p>
                </div>
            </div>
        </div>
    )

}



export default Featured