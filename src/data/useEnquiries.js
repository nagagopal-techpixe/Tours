import { useState, useEffect } from "react";

export default function useEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://kirti.bteam11.com/api/tours/enquiries")
      .then(res => res.json())
      .then(data => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching enquiries:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { enquiries, setEnquiries, loading, error };
}
