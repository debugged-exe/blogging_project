import React, { useState } from 'react'
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchDiv = () => {

    let option_tags = ["General Talks",
        "Web dev",
        "Android Dev",
        "Ios dev",
        "React",
        "Kotlin",
        "Js",
        "Html",
        "CSS",
        "Java"]

    const [myOptions, setMyOptions] = useState([])

    const getDataFromAPI = () => {
        console.log("Options Fetched from API")

        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res.data)
            for (var i = 0; i < res.data.length; i++) {
                myOptions.push(res.data[i].employee_name)
            }
            setMyOptions(myOptions)
        })
    }
        return (

          <div>

            <form className="mv4">

                <Input type="text" className="search-div" disabled='disabled'
                 disableUnderline={true}
                 startAdornment={
                  <InputAdornment position='start' style={{marginLeft:'-20px'}}>
                  <AiOutlineSearch className="bg-white pa2 search-button"
                  size="1.9rem"
                  color="gray"
                  />
                  </InputAdornment>
  
               } 
              
                    
              />
              <Autocomplete
                style={{ width: '80%' ,marginTop:'-40px',marginLeft:'50px'}}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                    <TextField {...params}
                    onChange={getDataFromAPI}
                    placeholder="eg. material kit"
                    />
        )}
      />
             
            </form>
            </div>
        )
    }

export default SearchDiv;