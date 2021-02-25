import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog";
import Filter from "./Filter";

function App() {

  const [ filter, updateFilter ] = useState( { greased: false, sort: "none" } );

  const filteredHogs = hogs.filter( hog => filter.greased ? hog.greased : true );

  if ( filter.sort === "name" ) {
    filteredHogs.sort( ( thisHog, thatHog ) => thisHog.name < thatHog.name ? -1 : 1 );
  } else if ( filter.sort === "weight" ) {
    filteredHogs.sort( ( thisHog, thatHog ) => thisHog.weight - thatHog.weight );
  }

  return (
    <div className="App">
      <Nav />
      <hr />
      <Filter filter={ filter } updateFilter={ updateFilter } />
      <br />
      <div className="ui cards">
        { filteredHogs.map( hog => <Hog key={ hog.name } hogDetails={ hog } /> ) }
      </div>
    </div>
  );
  
}

export default App;
