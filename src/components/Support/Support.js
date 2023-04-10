import React,{useState} from 'react'
import Header from '../Header/Header'
import { IoImageOutline } from "react-icons/io5";
import "./Support.css"
function Support() {
    const [feedbackText, setFeedbackText] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [video, setVideo] = useState(null);

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleImage1Change = (event) => {
    setImage1(event.target.files[0]);
  };

  const handleImage2Change = (event) => {
    setImage2(event.target.files[0]);
  };
  const handleImage3Change = (event) => {
    setImage3(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("feedbackText", feedbackText);
    if (image1) {
      formData.append("image1", image1);
    }
    if (image2) {
      formData.append("image2", image2);
    }
    if (image3) {
      formData.append("image3", image2);
    }
    if (video) {
      formData.append("video", video);
    }

    // Replace the email address below with the actual email address
    fetch("sourabhpannde@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Feedback submitted successfully!");
      })
      .catch((error) => {
        alert(`Feedback submission failed: ${error.message}`);
      });
  };
  return (
    <div>
        <Header/>

        <div className="myorder-support">
            My Order
        </div>

        <div className="arrow-support">
            {`> ` }
        </div>

        <div className="support">
            Support
        </div>

        <div className="support_text">
            <h2>We are here to help you</h2>
            <p>Please enter the below details correctly so our team can resolve the issue</p>
        </div>

        <div className="support_textbox">
            <input type="text" style={{width:900, height:500,border: 'none',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', padding:10}} value={feedbackText}  onChange={handleFeedbackTextChange}/>
        </div>

        <h3 className='uploadproof'>Upload Proof</h3>
    <form onSubmit={handleSubmit}>
        <div className="uploadimage_rectangle"></div>
        <h3 className='upload_image'>Upload Image</h3>

    < IoImageOutline  className='img1' type="file" accept="image/*" onChange={handleImage1Change}/>


    <div className="uploadimage_rectangle2"></div>
        <h3 className='upload_image2'>Upload Image</h3>

    < IoImageOutline  className='img2' type="file" accept="image/*" onChange={handleImage2Change}/>


    <div className="uploadimage_rectangle3"></div>
        <h3 className='upload_image3'>Upload Image</h3>

    < IoImageOutline  className='img3' type="file" accept="image/*" onChange={handleImage3Change}/>

    
    <div className="uploadimage_rectangle4"></div>
        <h3 className='upload_video'>Upload Video</h3>

    < IoImageOutline  className='img4' type="file" accept="video/*" onChange={handleVideoChange}/>


    <button className='submit_btn' type="submit">Next</button>
    </form>
    </div>
  )
}

export default Support