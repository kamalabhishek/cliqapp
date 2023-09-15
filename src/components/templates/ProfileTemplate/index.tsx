import { Button, Grid } from "@mui/material";
import React, { useRef } from "react";
import ProfilePicture from "../../molecules/ProfilePicture";
import ProfileData from "../../organisms/ProfileData";
import ProfileDescription from "../../organisms/ProfileDescription";

import { exportComponentAsJPEG } from "react-component-export-image";
import { makeStyles } from "@mui/styles";
import { processLinkedInLink } from "../../../utils/ProfileTemplateUtils";
import { PersonType } from "../../pages/Profile";

const useStyles = makeStyles({
  div: { width: 660, margin: 0 },
  button: {
    margin: "10px 0px 30px 0px !important",
  },
});

export const ProfileTemplate: React.FC<PersonType> = ({
  description,
  firstName,
  lastName,
  twitter,
  github,
  facebook,
  quora,
  behance,
  starva,
  linkedin,
  instagram,
  stackoverflow,
  profile,
}) => {
  const componentRef = useRef<any>();
  const classes = useStyles();
  const downloadProfileImage = () => {
    exportComponentAsJPEG(componentRef, { fileName: `${firstName}` });
  };

  return (
    <>
      <div className={classes.div} ref={componentRef}>
        <Grid container>
          <Grid container item xs={12}>
            <ProfileData
              firstName={firstName}
              lastName={lastName}
              linkedin={processLinkedInLink(linkedin)}
              instagram={instagram}
              description={description}
              facebook={facebook}
              github={github}
              twitter={twitter}
              quora={quora}
              stackoverflow={stackoverflow}
              starva={starva}
              behance={behance}
              profile={profile}
            />
            <ProfilePicture profile={profile} />
          </Grid>
          <Grid container item>
            <ProfileDescription description={description} />
          </Grid>
        </Grid>
      </div>
      <Button
        color="primary"
        variant="contained"
        className={classes.button + " download_button"}
        onClick={downloadProfileImage}
      >
        Download {firstName}
      </Button>
    </>
  );
};
export default ProfileTemplate;
