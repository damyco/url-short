import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

import Button from "./Button";
import ShortLink from "./ShortLink";

import styles from "../styles/ShortenLink.module.css";

// todo
// - upon clicking button send the request and add it to the API request
// - disable the button while the request is awaiting promise
// - get the data back and save it to a state
// - save the state to the local storage
// - render the added elements from the state

export default function ShortenLink() {
  const [urlToShort, setUrlToShort] = useState("");
  const [allUrls, setAllUrls] = useState([]);

  const fetchData = async ({ queryKey }) => {
    const [_, url] = queryKey;
    const { data } = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
    console.log(data);
    setAllUrls([...allUrls, data]);
    return data;
  };

  const { isLoading, isRefetching, data, error, refetch } = useQuery(
    ["url", urlToShort],
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: false, // handle refetch manually
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    setUrlToShort("");
    refetch();
  };

  return (
    <>
      <section className={styles.wrapper}>
        <form className={styles.container}>
          <input
            className={styles.linkInput}
            type="url"
            value={urlToShort}
            onChange={(e) => setUrlToShort(e.target.value)}
            placeholder="Shorten a link here..."
          />
          <Button style="primary" handler={handleClick}>
            Shorten it!
          </Button>
        </form>
      </section>
      {allUrls.map((item) => {
        return (
          <ShortLink
            key={item.result.code}
            originalLink={item.result.original_link}
            shortLink={item.result.full_short_link2}
          />
        );
      })}
    </>
  );
}
