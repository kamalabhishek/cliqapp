import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  image: { marginRight: 5, borderRadius: 60 },
});
interface TextIconProps {
  image: string;
  text: string;
}

const TextIcon: React.FC<TextIconProps> = ({ image, text }) => {
  const classes = useStyles();
  return (
    <Grid container item>
      {text && (
        <>
          <img src={image} alt="" height="30" className={classes.image} />
          <Typography variant="h6">{text}</Typography>
        </>
      )}
    </Grid>
  );
};
export default TextIcon;
