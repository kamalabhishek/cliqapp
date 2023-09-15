import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImageUploading, { ImageListType } from "react-images-uploading";
const useStyles = makeStyles({
  button: {
    marginRight: 10,
  },
});
interface ImageUploadProps {
  images: ImageListType;
  onImagesChange: (imageList: ImageListType) => void;
}

const ImageUploader: React.FC<ImageUploadProps> = ({
  images,
  onImagesChange,
}) => {
  const classes = useStyles();

  const downloadAll = () => {
    const download_buttons: HTMLButtonElement[] = document.querySelectorAll(
      ".download_button"
    ) as unknown as HTMLButtonElement[];
    for (let i = 0; i < download_buttons.length; i++) {
      download_buttons[i].click();
    }
  };
  return (
    <ImageUploading multiple value={images} onChange={onImagesChange}>
      {({ onImageUpload, isDragging, dragProps, onImageRemoveAll }) => (
        // write your building UI
        <>
          <Button
            variant="contained"
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            className={classes.button}
          >
            Upload Profile Pics
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={downloadAll}
            className={classes.button}
          >
            Download All
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onImageRemoveAll}
            {...dragProps}
            className={classes.button}
          >
            Clear cached Profile Pics
          </Button>
        </>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
