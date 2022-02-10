import React, {useState,useEffect} from "react";

export default function Department(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

useEffect(() => {
    fetch('https://demo.jobsoid.com/api/v1/departments')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  return(
    <div className="dropdown">
      <select class="form-select">
        
          <option>Department</option>
         
      </select>
  </div>
  )
}