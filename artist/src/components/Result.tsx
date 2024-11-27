
import { Table } from "flowbite-react";
import { ISong } from "../models/songs";

interface resultProps{
    songs: ISong[] | undefined
}

function Result(props: resultProps) {
    const {songs} = props
  return (
    <div className="overflow-x-auto mt-3">
      <Table>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Time</Table.HeadCell>
          <Table.HeadCell>BPM</Table.HeadCell>
          <Table.HeadCell>Year</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

            {songs?.map((song) => {
                return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{song.TITLE}</Table.Cell>
            <Table.Cell>{song.TIME}</Table.Cell>
            <Table.Cell>{song.BPM}</Table.Cell>
            <Table.Cell>{song.YEAR}</Table.Cell>
            <Table.Cell>{song.GENRE}</Table.Cell>
          </Table.Row>
                )
            })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Result;