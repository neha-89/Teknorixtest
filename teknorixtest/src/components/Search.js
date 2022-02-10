import React, {useState,useEffect} from 'react';
import Department from "./Department";
import Location from "./Location";
import Function from "./Function";



export default function Search(){

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
    fetch('https://demo.jobsoid.com/api/v1/jobs')
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

    return (
        <div className ="container">
            <div className="row">
                <div className="col-12">
                    <input type="search" className="form-control " placeholder="Search for Job"></input>
                </div>
                <div className="col-4">
                <Department /> 
                </div>
                <div className="col-4">
                <Function /> 
                </div>
                <div className="col-4">
                <Location />
                </div>
            </div>
        </div>
    )
}