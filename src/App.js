import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { getStates } from './store/store';

function App() {
  let myStates = useSelector((state) => state);
  const [datas, setDatas] = useState();
  useEffect(() => {
  getStates()

    const fetchData = async () => {
      return myStates;
    };
    fetchData().then((data) => setDatas(data));
  }, [myStates]);

  return (
    <div className="App">
      <Header />

      <div className="container">
        {datas &&
          datas.filteredDatas.map((elem,index) => {
            return (
              <div id={index} className="container_item">
                <h3>{elem.tags}</h3>{" "}
                <img src={elem.img} srcSet={elem.img_2x} alt={elem.autor}  />
                <h1>{elem.title}</h1>
                <div className="veiw_section">
                  <span>{elem.autor}</span>
                  <h5>{elem.date}</h5>
                  <h5>{elem.views}</h5>
                </div>
                <p>{elem.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
