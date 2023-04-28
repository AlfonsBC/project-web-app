import React, { useState } from 'react';
import {useQuery} from 'react-query';


export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
   await  fetch("https://bible-api.com/" + value).then((response) => response.json()).then(json => {
      console.log(json);
    });
  }

  const {data, error, isLoading} = useQuery( input, fetchData);


  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  	// Error and Loading states
	if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;
  
  return (
    
    <><div className="row">
      <div className="col-11 position-relative">
        <input type="text" value={input} onChange={(e) => handleChange(e.target.value)} placeholder="Search Bible Verse"
          className="form-control rounded-pill ps-5" />
        <i className="bi bi-search position-absolute wd-nudge-up position-relative"></i>
      </div>
      <div className="col-1"><i className="bi bi-gear-fill text-primary fs-3 mt-3"></i></div>
    </div><div>
        <h1>Random Fact:</h1>
        <p>{data["verses"]["text"]}</p>
      </div>
      
      </>

  );
}

export default SearchBar;
