// components/Repositories.jsx
 
import React, { Fragment } from "react";
import axios from "axios";
import { useQuery } from "react-query";
 
 
 
export default function Example() {
 
  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
    axios
      .get("https://pokeapi.co/api/v2/ability/1/")
      .then((res) => res.data)
  );
 
  if (isLoading) return "Loading...";
 
  if (error) return "An error has occurred: " + error.message;
 
  console.log(data)
 
    return (
      <>
        {data.map(repo => {
          return (
            <Fragment
              key={repo.id}
            >
              <ul>
                <li>
                  <a
                    href={repo.clone_url}>
                    {repo.name}
                  </a>
                </li>
              </ul>
            </Fragment>
          )
        })}
        <button type="button" onClick={refetch}>
          Fetch again
        </button>
      </>
    );
  };