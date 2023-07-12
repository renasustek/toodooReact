import React, { useState, useEffect } from 'react'
import axios from "axios";
const API_URI = 'http://localhost:7070/getNotes';

 function GetNotes(){
    
    const [notes, setNotes] = useState();

      useEffect(() => {
      axios
         .get(API_URI)
         .then((response) => {
            setNotes(response.data);
            console.log(response.data)
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return notes; 
  
}

export default GetNotes;