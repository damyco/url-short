import axios from "axios";
import { useQuery } from "react-query";

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
  const { isLoading, data, error, refetch } = useQuery("url", async () => {
    const { data } = await axios(
      "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
    );
    console.log(data);
    return data;
  });

  const handleClick = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <section className={styles.wrapper}>
        <form className={styles.container}>
          <input
            className={styles.linkInput}
            type="url"
            placeholder="Shorten a link here..."
          />
          <Button style="primary" handler={handleClick}>
            Shorten it!
          </Button>
        </form>
      </section>
      <ShortLink />
      <ShortLink />
      <ShortLink />
    </>
  );
}
