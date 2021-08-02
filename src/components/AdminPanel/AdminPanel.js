
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AdminPanel() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), imageUrl: '', description: '' },
  ]);
  const [maintitle,setTitle]=useState("");
  const [mainimg,setImg]=useState("");
  const [maindes,setDes]=useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields,maindes,mainimg,maintitle);
    //fetch call(promise)
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
    setInputFields([...inputFields, { id: uuidv4(),  imageUrl: '', description: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <div className="bg-white">
      <h1>Admin Panel</h1>
      <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={maintitle} onChange={(e)=>setTitle(e.target.value)}/><br/>
        <input type="text" placeholder="Image Url" value={mainimg} onChange={(e)=>setImg(e.target.value)}/><br/>
        <input type="text" placeholder="Description"value={maindes} onChange={(e)=>setDes(e.target.value)}/><br/>
        { 
        inputFields.map(inputField => (
          <div key={inputField.id}>
            <h3>Sub blog</h3>
            < input 
              type="text"
              name="imageUrl"
              placeholder="image Url"
              value={inputField.imageUrl}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
             < input 
              type="text"
              name="description"
              placeholder="Description"
              value={inputField.description}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                Remove            
            </button>
             <button onClick={handleAddFields}>Add</button>
          </div>
        )) }
        <button
          className="bg-blue white"
          type="submit" 
          onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}

 export default AdminPanel;