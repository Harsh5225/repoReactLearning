import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import BitcoinCard from "./BitcoinCard";


const Bitcoincreate = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.slice1);

  useEffect(() => {
    dispatch(FetchData(20));
  }, [dispatch]);

  if (loading) {
    return <h1 className="loading">Data is loading...</h1>;
  }
  if (error) {
    return <h1 className="error">Error has occurred</h1>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Cryptocurrency Prices</h1>
      </header>
      <div className="card-container">
        {data.map((value) => (
          <BitcoinCard key={value.id} coin={value} />
        ))}
      </div>
    </div>
  );
};

export default Bitcoincreate