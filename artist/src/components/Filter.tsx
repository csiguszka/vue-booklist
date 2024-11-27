
import { Label, Select } from "flowbite-react";
import { IArtist } from "../models/artists";

interface FilterProps {
    artists: IArtist[],
    changeArtist: (value: string) => void
}

function Filter(props: FilterProps) {
    const {artists, changeArtist} = props
  return (
    <div className="max-w-md flex items-center space-x-3">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select an artists" />
      </div>
      <Select id="countries" required defaultValue={"Placeholder"} onChange={(e) => {changeArtist(e.target.value)}}>
        <option value="Placeholder" className="">Select one</option>
        {artists.map((data) => <option>{data.artist}</option>)}
      </Select>
    </div>
  );
}
export default Filter;