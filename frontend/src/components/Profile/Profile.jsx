import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

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

  const handlePictureButtonClconstick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src={editedUser.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <button className="picture-button" onClick={handlePictureButtonClick}>
          +
        </button>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
            className="profile-input"
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
                name="Role"
                value={editedUser.role}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              editedUser.role
            )}
          </p>
          <p>
            Email:{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              <a href={`mailto:${editedUser.email}`}>{editedUser.email}</a>
            )}
          </p>
          <p>
            Phone:{" "}
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleChange}
                className="profile-input"
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
                onChange={handleChange}
                className="profile-input"
              />
            ) : (
              editedUser.address
            )}
          </p>
        </div>
      </div>
      <br />
      <br />
      <button className="edit-button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};
export default Profile;
