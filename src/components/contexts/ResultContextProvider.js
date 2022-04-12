/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    // eslint-disable-next-line no-const-assign
    setLoading = true;
    const response = await fetch(`${baseUrl}$(type)`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "7c887f9ff1msh732f9f11eaf8adbp14a164jsn5ef96923dc2f",
      },
    });

    const data = await response.json();
    console.log(data);

    setResults(data);
    // eslint-disable-next-line no-const-assign
    setLoading = false;
  }; 

  return (
    <ResultContext.Provider
      value={{ getResults, results, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
