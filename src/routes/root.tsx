import { useQuery } from "@apollo/client";
import { gql } from "../__generated__/gql";

const GET_Q = gql(`
  query get{
    albums {
      data {
        id
        title
      }
    }
  }
`);

export default function Root() {
  const { loading, error, data } = useQuery(GET_Q);

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <h1 className="text-3xl font-bold underline">
      {data?.albums?.data?.slice(0, 10).map((album) => (
        <div key={album?.id}>{album?.title}</div>
      ))}
    </h1>
  );
}
