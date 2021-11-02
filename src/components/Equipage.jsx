import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function Equipage() {
  const [equipages, setEquipages] = useState([]);

  //   const deleteArgonaute = (idEquipage) => {
  //     const filteredArgonaute = equipages.filter(
  //       (equipage) => equipage.idEquipage !== idEquipage
  //     );
  //     setEquipages(filteredArgonaute);
  //   };

  useEffect(() => {
    axios
      .get('http://localhost:8080')
      .then((res) => res.data)
      .then((data) => {
        setEquipages(data);
        console.log("equipages", data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès au bateau";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <>
      <div>
        {equipages.map((equipage) => (
          <Card {...equipage} key={equipage.id} />
        ))}
      </div>
    </>
  );
}
