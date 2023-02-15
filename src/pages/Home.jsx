import axios from "axios";
import { useEffect, useState } from "react";
import CoverPage from "../components/CoverPage";
import Footer from "../components/Footer";
import LocationInfo from "../components/LocationInfo";
import NotResidents from "../components/NotResidents";
import ResidentList from "../components/ResidentList";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocations(res.data));
  }, []);
  return (
    <>
      <CoverPage />

      <SearchBox setLocations={setLocations} />
      <LocationInfo
        id={locations.id}
        name={locations.name}
        type={locations.type}
        dimension={locations.dimension}
        numberResidents={locations.residents?.length}
      />
      {locations.residents?.length === 0 ? (
        <NotResidents />
      ) : (
        <ResidentList residents={locations.residents} />
      )}
      <Footer />
    </>
  );
};

export default Home;
