import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../../assets/images/Zemoso_low_opacity.png";
const useStyles = makeStyles({
  description: {
    backgroundImage: `url(${Logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    minWidth: 100,
  },
  container: {
    border: "5px solid #f46c52",
    height: "auto",
    width: "auto",
    padding: "25px 10px",
  },
});
interface ProfileDescriptionProps {
  description: string;
}
const ProfileDescription: React.FC<ProfileDescriptionProps> = ({
  description,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      className={classes.container}
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="h6" align="center" className={classes.description}>
        {description}
      </Typography>
    </Grid>
  );
};
export default ProfileDescription;
