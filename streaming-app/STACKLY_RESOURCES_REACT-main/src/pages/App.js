import React from "react";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import GetCourseVideo from "../services/GetCourseVideo";
import LoadingScreen from "../components/LoadingScreen";

export default function App({ data }) {
  console.log(data);
  return <Example />;
}

function Example() {
  let { id } = useParams();

  const { isLoading, error, data, isFetching } = GetCourseVideo(id);
  if (isLoading) return <LoadingScreen />;

  if (data.error) {
    return <Error404 />;
  }

  if (error) return <h1>Error PA</h1>;

  return (
    <div>
      <h1>PROTECTED | Tenemos DATA</h1>
      <h1>{JSON.stringify(data)}</h1>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
