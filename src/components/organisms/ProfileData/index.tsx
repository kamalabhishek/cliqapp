import LinkedInIcon from "../../../assets/icons/linkedin_icon.png";
import InstagramIcon from "../../../assets/icons/instagram-icon.png";
import BehanceIcon from "../../../assets/icons/behnace.jpeg";
import FacebookIcon from "../../../assets/icons/facbook_icon.png";
import GithubIcon from "../../../assets/icons/github.png";
import QuoraIcon from "../../../assets/icons/quora.png";
import StackoverflowIcon from "../../../assets/icons/stackoverflow.jpeg";
import StarvaIcon from "../../../assets/icons/starva.png";
import TwitterIcon from "../../../assets/icons/twitter.png";
import { Avatar, Grid, Typography } from "@mui/material";
import TextIcon from "../../atoms/TextIcon";
import { makeStyles } from "@mui/styles";
import { PersonType } from "../../pages/Profile";
const useStyles = makeStyles({
  container: {
    minWidth: 300,
    height: 300,
    backgroundColor: "#f46c52",
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: "#f46c52 !important",
    color: "black !important",
    border: "2.5px solid black",
  },
});

const ProfileData: React.FC<PersonType> = ({
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
  const classes = useStyles();
  const fullName = firstName + " " + lastName;
  const getAvatarSymbols = () => {
    return `${firstName.at(0)?.toUpperCase()}${lastName.at(0)?.toUpperCase()}`;
  };
  return (
    <Grid
      container
      item
      className={classes.container}
      alignItems="start"
      justifyContent={"space-evenly"}
      direction="column"
      xs={6}
      paddingLeft={5}
    >
      <Grid item paddingLeft={8}>
        <Avatar
          sx={{ width: 60, height: 60, fontSize: 25 }}
          className={classes.avatar}
        >
          {getAvatarSymbols()}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          {fullName}
        </Typography>
      </Grid>
      <Grid container item>
        <TextIcon image={LinkedInIcon} text={linkedin} />
        <TextIcon image={InstagramIcon} text={instagram} />
        <TextIcon image={BehanceIcon} text={behance} />
        <TextIcon image={TwitterIcon} text={twitter} />
        <TextIcon image={FacebookIcon} text={facebook} />
        <TextIcon image={GithubIcon} text={github} />{" "}
        <TextIcon image={QuoraIcon} text={quora} />
        <TextIcon image={StackoverflowIcon} text={stackoverflow} />
        <TextIcon image={StarvaIcon} text={starva} />
      </Grid>
    </Grid>
  );
};

export default ProfileData;
