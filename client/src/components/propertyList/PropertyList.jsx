import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import axios from "axios";

const PropertyList = () => {
  const [houses, setHouses] = useState([]);
  const { data, loading, error } = useFetch("/hotels/countByType");
  const [selectedHouseIndex, setSelectedHouseIndex] = useState(null);

  useEffect(() => {
    axios
      .get("api/House")
      .then((response) => {
        const data = response.data;
        setHouses(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const handleHouseClick = (index) => {
    setSelectedHouseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const properties = data?.map((property, index) => ({
    ...property,
    house: houses[index],
  }));

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItemContainer" key={i}>
                <div className="pListItem" onClick={() => handleHouseClick(i)}>
                  <img src={img} alt="" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                  </div>
                  {houses[i] && (
                    <div className="pListHouseInfo">
                      <h3>{houses[i].Name}</h3>
                      {selectedHouseIndex === i && (
                        <div>
                          <p>Количество человек: {houses[i].CountPeople}</p>
                          <p>
                            Стоимость за места на одного человека за сутки:{" "}
                            {houses[i].CostDayOne}, руб
                          </p>
                          <p>
                            Стоимость дома за сутки: {houses[i].CostDayAll}, руб
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
