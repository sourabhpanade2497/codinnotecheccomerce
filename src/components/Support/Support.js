import React, { useState } from "react";
import Header from "../Header/Header";
import { IoImageOutline, IoFilmOutline } from "react-icons/io5";
import "./Support.css";
function Support() {
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (event, index) => {
    const newImageFiles = [...imageFiles];
    newImageFiles[index] = event.target.files[0];
    setImageFiles(newImageFiles);
    setSelectedFile(event.target.files[0]);
    
  };

  const handleVideoUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handlesubmit = () => {
    window.location.href = "/SupportSuccess";
  };

  return (
    <div>
      <Header />

      <div className="myorder-support">My Order</div>

      <div className="arrow-support">{`> `}</div>

      <div className="support">Support</div>

      <div className="support_text">
        <h2>We are here to help you</h2>
        <p>
          Please enter the below details correctly so our team can resolve the
          issue
        </p>
      </div>

      <div className="support_textbox">
        <input
          type="text"
          style={{
            width: 900,
            height: 500,
            border: "none",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            padding: 10,
          }}
        />
      </div>

      <div className="uploadimage_rectangle"></div>

      <div className="uploadimage_rectangle2"></div>

      <div className="uploadimage_rectangle3"></div>

      <div className="uploadimage_rectangle4"></div>
      <div className="App">
      <div className="upload-container">
        <label htmlFor="image-upload">
          <div className="icon-container">
            <IoImageOutline className="icon" />
          </div>
          <p className="upload-text">Upload Image</p>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {selectedFile && (
            <p className="Image-Name">
              Image Name: <br /> {selectedFile.name} ({selectedFile.size} bytes)
            </p>
          )}
        </label>
      </div>

      <div className="upload-container">
        <label htmlFor="image-upload">
          <div className="icon-container">
            <IoImageOutline className="icon" />
          </div>
          <p className="upload-text">Upload Image</p>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {selectedFile && (
            <p className="Image-Name">
              Image Name: <br /> {selectedFile.name} ({selectedFile.size} bytes)
            </p>
          )}
        </label>
      </div>

      <div className="upload-container">
        <label htmlFor="image-upload">
          <div className="icon-container">
            <IoImageOutline className="icon" />
          </div>
          <p className="upload-text">Upload Image</p>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {selectedFile && (
            <p className="Image-Name">
              Image Name: <br /> {selectedFile.name} ({selectedFile.size} bytes)
            </p>
          )}
        </label>
      </div>

      <div className="upload-container">
        <label htmlFor="video-upload">
          <div className="icon-container">
            <IoFilmOutline className="icon" />
          </div>
          <p className="upload-text">Upload Video</p>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            onChange={handleVideoUpload}
          />
          {selectedFile && (
            <p>
              Video name: <br /> {selectedFile.name} ({selectedFile.size} bytes)
            </p>
          )}
        </label>
      </div>
    </div>

      <button className="submit_btn" type="submit" onClick={handlesubmit}>
        Next
      </button>
    </div>
  );
}
export default Support;
