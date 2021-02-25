import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

import { useState } from "react";

function Hog( { hogDetails } ) {

    const { name, specialty, greased, weight } = hogDetails;
    const medal = hogDetails[ "highest medal achieved" ];
    const hogImages = { augustus_gloop, babe, bailey, cherub, galaxy_note, leggo_my_eggo, peppa, piggy_smalls, piglet, porkchop, trouble, truffle_shuffle };
    
    const [ clicked, toggleClicked ] = useState( false );

    return (
        <div className="ui card pigTile" onClick={ () => toggleClicked( clicked => !clicked ) }>
            <h3 className="largeHeader">{ name }{ greased ? "🛢" : "" }</h3>
            <img className="image" src={ hogImages[ name.toLowerCase().replace( " ", "_" ) ] } alt={ name } />
            <div className={ clicked ? "achievementText description" : "achievementText description hidden" }>
                <b>Specialty:</b> { specialty }<br />
                <b>Weight:</b> { weight }<br />
                <b>Highest medal achieved:</b> { medal }<br />
            </div>
        </div>
    );

}

export default Hog;