import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import UnknownImage from "../../../assets/images/unknow_image.png";
const useStyles = makeStyles({
  container: {
    minWidth: 300,
    height: 300,
    backgroundColor: "#f46c52",
    overflow: "hidden",
  },
});
interface ProfilePictureProps {
  profile: string;
}
const ProfilePicture: React.FC<ProfilePictureProps> = ({ profile }) => {
  const classes = useStyles();
  const [profilePic, setProfilePic] = useState(profile);
  const onImageChange = (event: any) => {
    const profileImage = event.target.files[0];
    setProfilePic(URL.createObjectURL(profileImage));
  };
  const reuploadProfilePic = () => {
    setProfilePic("");
  };
  useEffect(() => {
    setProfilePic(profile);
  }, [profile]);
  return (
    <Grid
      container
      item
      className={classes.container}
      alignItems="center"
      justifyContent={"center"}
      xs={6}
    >
      <Grid item>
        {profilePic ? (
          <img
            src={profilePic}
            alt={UnknownImage}
            height={300}
            onDoubleClick={reuploadProfilePic}
            onDragEnd={reuploadProfilePic}
          />
        ) : (
          <input
            type="file"
            id="image-input"
            onChange={onImageChange}
            alt="Upload Image"
          />
        )}
      </Grid>
    </Grid>
  );
};
export default ProfilePicture;
