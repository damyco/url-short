import Card from "./Card";
import ShortenLink from "./ShortenLink";
import styles from "../styles/StatisticsSection.module.css";

const cardsContent = [
  {
    id: 1,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    iconUrl: "/icon-brand-recognition.svg",
  },
  {
    id: 2,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and were people engage with your content helps inform better decisions.",
    iconUrl: "/icon-detailed-records.svg",
  },
  {
    id: 3,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    iconUrl: "/icon-fully-customizable.svg",
  },
];

export default function StatisticsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ShortenLink />
        <h3 className={styles.heading}>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.cards}>
          {cardsContent.map((card) => {
            return (
              <Card
                key={card.id}
                title={card.title}
                text={card.text}
                iconUrl={card.iconUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
