import Navbar from "./Navbar";
import { useState } from "react";
import "./profile.css";
import { Gallery } from "react-grid-gallery";
import blackJeansImage from "./assets/wardrobe/black-jeans.jpg";
import bueDenimShorts from "./assets/wardrobe/blue_denim_shorts.jpg";
import redShirt from "./assets/wardrobe/redshirt.jpg";
import whitesweater from "./assets/wardrobe/white_sweater.webp";
import WhiteTrouser from "./assets/wardrobe/white_trousers.jpg";
import blackTshirt from "./assets/wardrobe/black_tshirt.webp";
import blueJeans from "./assets/wardrobe/blue-denim.jpg";
import avatar from "./assets/avatar.png";

function Profile() {
  const images = [
    {
      src: blackJeansImage,
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: bueDenimShorts,
      width: 320,
      height: 212,
    },
    {
      src: redShirt,
      width: 320,
      height: 212,
    },
    {
      src: whitesweater,
      width: 320,
      height: 212,
    },
    {
      src: WhiteTrouser,
      width: 320,
      height: 212,
    },
    {
      src: blackTshirt,
      width: 320,
      height: 212,
    },
    {
      src: blueJeans,
      width: 320,
      height: 212,
    },
  ];

  function isValidImage(imageUrl) {
    // Check if imageUrl is a string before using endsWith
    if (typeof imageUrl === "string") {
      return (
        imageUrl.endsWith(".jpg") ||
        imageUrl.endsWith(".png") ||
        imageUrl.endsWith(".gif")
      );
    } else {
      // Handle non-string values (optional)
      console.warn("Invalid image URL format:", imageUrl);
      return false;
    }
  }
  const [newimages, setnewImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onloadend = () => {
        setnewImages([...images, reader.result]);
      };
    }
  };

  const handleImageUrlUpload = (event) => {
    const imageUrl = event.target.value;
    if (imageUrl) {
      setnewImages([...images, imageUrl]);
    }
  };
  const [profileData, setProfileData] = useState({
    name: "Sonika",
    Age: "22",
    bio: "Love slaying everyday",
    avatarUrl: avatar,
    website: "",
  });
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="left-half">
          <div className="content-box ">
            <div className="profile-container">
              <div className="profile-header">
                <div className="profile-info">
                  <h2>{profileData.name}</h2>
                  <img src={profileData.avatarUrl} alt="Uploaded Image" />
                  <p>Tag: {profileData.bio}</p>
                  <p>Age: {profileData.Age}</p>
                </div>
              </div>
              <div className="profile-stats">
                {/* Add sections for specific stats (e.g., followers, following, posts) */}
              </div>
              <button className="edit-profile-btn">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="right-half">
          <div className="content-box ">
            <h2>Heres your Wardrobe</h2>
            <Gallery images={images} />

            <div className="image-upload">
              <p>
                Want to add more clothes to the wardrobe?
                <br />
                Add from the web or file system
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {/* <label htmlFor="file-upload">Upload Local Image</label> */}
              <br />
              <div className="upload-container">
                <label htmlFor="image-url">Upload from Web:</label>
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  onChange={handleImageUrlUpload}
                />
                <br />
                {newimages.length > 0 && (
                  <div className="gallery">
                    {newimages
                      .filter((newimage) => isValidImage(newimage))
                      .map((validImage) => (
                        <img
                          key={validImage}
                          src={validImage}
                          alt="Uploaded Image"
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
