import { useState } from "react";
import artistData from "./artists";
import Filter from "./components/Filter";
import Result from "./components/Result";
import { IArtist } from "./models/artists";
import { ISong } from "./models/songs";
import songsData from "./songs";

const App = () => {
  // const [selectedArtist, setSelectedArtist] = useState<IArtist | undefined>(undefined)
  const [filteredSongs, setFilteredSongs] = useState<ISong[] | undefined>(undefined)

  const changeArtist = (value: string) => {
    const filteredSelectedArtist = artistData.filter((artist) => artist.artist === value)[0]
    const songs = songsData.filter((song) => song.ARTIST_ID === filteredSelectedArtist._id)
    setFilteredSongs(songs)
  }

  return (
  <div className="container mt-5">
    <Filter artists={artistData} changeArtist={changeArtist}/>
    <Result songs={filteredSongs}/>
  </div>
  )
  ;
};

export default App;
