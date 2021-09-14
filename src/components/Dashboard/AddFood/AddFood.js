import React, { useState } from "react";
import styles from "./AddFood.module.css";
import AdminPanel from "../AdminPanel/AdminPanel";

const AddFood = () => {
  const [foodInfo, setFoodInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newFoodInfo = { ...foodInfo };
    newFoodInfo[e.target.name] = e.target.value;
    setFoodInfo(newFoodInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", foodInfo.name);
    formData.append("details", foodInfo.details);
    formData.append("price", foodInfo.price);

    fetch("https://aqueous-basin-07040.herokuapp.com/addfood", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.addFoodContainer}>
      <div className={styles.adminPanelContainer}>
        <AdminPanel></AdminPanel>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.container}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Details"
            onBlur={handleBlur}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            onBlur={handleBlur}
          />
          <input
            type="file"
            name="foodImg"
            id="foodImg"
            onChange={handleFileChange}
          />
          <button onClick={handleSubmit}>Add Food</button>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
