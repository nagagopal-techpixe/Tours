import { useState, useEffect } from "react";

const useTours = () => {
  const [TOURS, setTOURS] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("https://kirti.bteam11.com/api/tours");
        if (!res.ok) throw new Error("Failed to fetch tours");

        const data = await res.json();
        setTOURS(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchTours();
  }, []);

  return { TOURS, error };
};

export default useTours;
