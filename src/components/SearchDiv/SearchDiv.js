import React, { useState } from 'react'
import { Input } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchDiv.css'
import {withRouter} from "react-router-dom";
//redux connect
import {connect} from "react-redux";
//set actions
import {setTag} from "../../redux/tags/tags.actions";

const SearchDiv = ({ placeholder, data , setTag, history}) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleChange = (event) => {
    let searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });
    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
  }

  const handleClick = (event) => {
    const tag = event.target.getAttribute('value');
    setWordEntered(tag);
    setTag(tag);
    history.push('/demo');
  }

  return (
    <div>
      <div className="mv4">
        <Input type="text"
          className="search-div"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position='start' style={{ marginLeft: '-20px' }}>
              <AiOutlineSearch className="bg-white pa2 search-button"
                size="1.9rem"
                color="gray"
              />
            </InputAdornment>
          }
          placeholder = {placeholder}
          onChange={handleChange}
          value={wordEntered}
        />
        <div>
          {
            filteredData.length !==0 &&
            (
              <div className="result">
                {filteredData.map((value, key) => {
                  return (
                    <div onClick={handleClick} className="dataItem" key={key} value={value}>{value}</div>
                  );
                })}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTag: tag => dispatch(setTag(tag))
})
export default connect(null,mapDispatchToProps)(withRouter(SearchDiv));