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
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async ({ queryKey }) => {
    const [_, url] = queryKey;

    const { data } = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);

    if (allUrls.some((item) => item.result.code === data.result.code)) {
      setErrorMessage("This link is already shortened! Try a different one.");
      resetErrorMessage();
      return;
    }
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
    if (urlToShort.length <= 0) {
      setErrorMessage("Please add a link.");
      resetErrorMessage();
      return;
    }

    setUrlToShort("");

    refetch();
  };

  const resetErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 2000);
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
          {isLoading || isRefetching ? (
            <Button>Shortening...</Button>
          ) : (
            <Button style="primary" handler={handleClick}>
              Shorten it!
            </Button>
          )}
        </form>
        {errorMessage ? (
          <span className={styles.errorMessage}>{errorMessage}</span>
        ) : (
          ""
        )}
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
