import React from "react";

export default function Form() {  
    return (
    <form className=""> 
        <label>
        Name:
        <input type="text"
            name="nom" 
            placeholder='Charalampos' 
        />
        </label>
     
        <label>
       genre:
        <input type="text" 
            name="genre" 
            placeholder='Homme'      
         />
        </label>
   
        <label>
        age:
        <input type="text" 
            name="age" 
            placeholder='23'  
            className="" 
        />
        </label>
        <input type="submit" value="Submit" />
    </form>
    );
  }