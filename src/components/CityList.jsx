import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add sua primeira cidade clicando no mapa" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;