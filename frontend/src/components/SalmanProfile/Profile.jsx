// Profile.jsx
import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = ({ userEmail }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: "",
    profilePicture: "",
    role: "",
    email: userEmail,
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/getUserProfile",
          { userEmail }
        );
        if (response.data) {
          setEditedUser({
            ...editedUser,
            name: response.data.name,
            phone: response.data.phone,
            role: response.data.role,
            address: response.data.address,
            profilePicture: response.data.profilePhoto, // Update to handle profile picture
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userEmail]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedUser({ ...editedUser, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePictureButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSaveClick = async () => {
    setIsEditing(!isEditing);
    try {
      const response = await axios.post(
        "http://localhost:5000/updateUserProfile",
        {
          ...editedUser,
          userEmail,
        }
      );
      if (response.data) {
        console.log("User profile updated successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src={editedUser.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        {isEditing && (
          <button className="picture-button" onClick={handlePictureButtonClick}>
            +
          </button>
        )}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            className="profile-input"
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
        ) : (
          <h1 className="profile-name">{editedUser.name}</h1>
        )}
      </div>
      <div className="profile-body">
        <br />
        <div className="profile-contact">
          <p>
            Role:{" "}
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={editedUser.role}
                className="profile-input"
                onChange={(e) =>
                  setEditedUser({ ...editedUser, role: e.target.value })
                }
              />
            ) : (
              editedUser.role
            )}
          </p>
          <p>
            Email:{" "}
            {isEditing ? (
              <span>Email cannot be changed</span>
            ) : (
              editedUser.email
            )}
          </p>
          <p>
            Phone:{" "}
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editedUser.phone}
                className="profile-input"
                onChange={(e) =>
                  setEditedUser({ ...editedUser, phone: e.target.value })
                }
              />
            ) : (
              editedUser.phone
            )}
          </p>
          <p>
            Address:{" "}
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={editedUser.address}
                className="profile-input"
                onChange={(e) =>
                  setEditedUser({ ...editedUser, address: e.target.value })
                }
              />
            ) : (
              editedUser.address
            )}
          </p>
        </div>
      </div>
      <br />
      <br />
      <button className="edit-button" onClick={handleSaveClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Profile;
