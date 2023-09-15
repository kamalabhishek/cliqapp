import ProfileTemplate from "../../templates/ProfileTemplate";
import { ImageListType } from "react-images-uploading";
import readXlsxFile from "read-excel-file";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ImageUploader from "../../molecules/ImageUploader";
import {
  mapProfilePicToIntro,
  parseExcelRows,
} from "../../../utils/ProfileTemplateUtils";
export type PersonType = {
  description: string;
  firstName: string;
  lastName: string;
  twitter: string;
  github: string;
  facebook: string;
  quora: string;
  behance: string;
  starva: string;
  linkedin: string;
  instagram: string;
  stackoverflow: string;
  profile: string;
};

const Profile = () => {
  const [people, setPeople] = useState<PersonType[]>();
  const [images, setImages] = useState<ImageListType>([]);
  const handleFileChange = (event: any) => {
    readXlsxFile(event.target.files[0]).then((rows) => {
      setPeople(parseExcelRows(rows));
    });
  };
  const onImagesChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };
  const handleUploadButtonClick = () => {
    document.getElementById("input-file")?.click();
  };

  useEffect(() => {
    setPeople((ps) => [...mapProfilePicToIntro(ps, images)]);
  }, [images]);

  return (
    <>
      <input
        type="file"
        id="input-file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button variant="contained" onClick={handleUploadButtonClick}>
        Upload Excel Sheet
      </Button>
      <br />
      <br />
      {people && people?.length > 0 && (
        <ImageUploader images={images} onImagesChange={onImagesChange} />
      )}
      <br />
      <br />
      {people &&
        people.map((person, index) => (
          <div key={`${person}__${index}`}>
            <ProfileTemplate {...person} />
          </div>
        ))}
    </>
  );
};
export default Profile;
