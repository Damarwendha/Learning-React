import { useGeolocation } from "./useGeolocation";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [countClicks, setCountClicks] = useLocalStorageState("clicks", 0);
  const {
    getPosition,
    position: { lat, lng },
    isLoading,
    error
  } = useGeolocation();

  function handleOnClick() {
    setCountClicks((c) => c + 1);
    getPosition();
  }

  return (
    <div>
      <button onClick={handleOnClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
