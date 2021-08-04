
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AdminPanel.css';


function AdminPanel() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), image: '', para: '' },
  ]);
  const [maintitle,setTitle]=useState("");
  const [mainimg,setImg]=useState("");
  const [maindes,setDes]=useState("");
  const [tag,setTag]=useState([]);
  const [read,setRead]=useState();

  const handleSubmit = (e) => {
    console.log("InputFields", inputFields,maindes,mainimg,maintitle,tag,read);

    fetch('https://pure-crag-11432.herokuapp.com/blogs', {
   			method: 'post',
   			headers: {'Content-Type': 'application/json'},
   			body: JSON.stringify({
   			title:maintitle,
   			preface:maindes,
        content:inputFields,
        image_url:mainimg,
        tags:tag,
        read_time:read
   		})
   	})
    .then(response => response.json())
  	.then(resp => {
  		if(resp["title"])
  		{
  		prompt('Your message was recieved successfully.Thank you we will try to solve your query as soon as possible.')

  		}
  	})
  	.catch(err => {
  		console.log(err)
  		prompt('OOPS....something went wrong.Please try again.')
  	});
    e.preventDefault();
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  image: '', para: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <div className="bg-white">
      <h1>Admin Panel</h1>
      <div>
      <form  onSubmit={handleSubmit}>
        <input type="text" className="inputStyling" placeholder="Title" value={maintitle} onChange={(e)=>setTitle(e.target.value)}/><br/>
        <input type="text" className="inputStyling" placeholder="Image Url" value={mainimg} onChange={(e)=>setImg(e.target.value)}/><br/>
        <textarea type="text" className="inputStyling" placeholder="Description" value={maindes} onChange={(e)=>setDes(e.target.value)}></textarea><br/>
        <select className="inputStyling " name="tag" value={tag} onChange={(e)=>setTag([e.target.value])}>
        <option value="" disabled hidden selected>Tag</option>
          <option value="Web dev">Web dev</option>
          <option value="Android Dev">Android Dev</option>
          <option value="Ios dev">Ios dev</option>
          <option value= "React" >React</option>
          <option value="Kotlin">Kotlin</option>
          <option value="Js">Js</option>
          <option value="Html">Html</option>
          <option value= "CSS">CSS</option>
          <option value="Java">Java</option>
        </select><br/>
        <input  className="inputStyling" type="number" placeholder="Read Time(in min)" value={read} onChange={(e)=>setRead(e.target.value)}/><br/>

        {
        inputFields.map(inputField => (
          <div key={inputField.id}>
            <h3>Sub blog</h3>
            <div className="mv3">
            <div className="mv3">
            < input
              type="text"
              className="subBloginputStyling"
              name="image"
              placeholder="image Url"
              value={inputField.image}
              onChange={event => handleChangeInput(inputField.id, event)}
            /></div>

          <textarea
              type="text"
              className="subBloginputStyling mh3"

              name="para"
              placeholder="Description"
              value={inputField.para}
              onChange={event => handleChangeInput(inputField.id, event)}
            ></textarea>
            </div>
            <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray mh3 subBlogRemoveButton" disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                Remove
            </button>
             <button className="f6 link dim br2 ba ph3 pv2 mb2 dib mid-gray mh3 subBlogAddButton" onClick={handleAddFields}>Add</button>
          </div>
        )) }
        <div className="mv3">
        <button
          className="f6 grow no-underline br-pill ph4 pv2 mb2 dib white adminPanelSendButton"
          type="submit"
          onClick={handleSubmit}>Send</button></div>
      </form>
      </div>
    </div>
  );
}

 export default AdminPanel;
