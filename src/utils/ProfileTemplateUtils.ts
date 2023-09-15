import { ImageListType } from "react-images-uploading";
import { PersonType } from "../components/pages/Profile";

export const processLinkedInLink = (linkedin: string | null | undefined) => {
  // const linkedin = "https://www.linkedin.com/in/rishabh-mehta-96203297";
  if (linkedin === null || linkedin === undefined) {
    return "";
  }
  let tempStringArray = linkedin.split("/");
  let instaHandle = linkedin.endsWith("/")
    ? tempStringArray[tempStringArray.length - 2]
    : tempStringArray[tempStringArray.length - 1];
  instaHandle =
    instaHandle.lastIndexOf("-") === -1
      ? instaHandle
      : instaHandle.substring(0, instaHandle.lastIndexOf("-"));
  return instaHandle;
};

export const parseExcelRows = (rows: any) => {
  const data = rows.map((row: any) => {
    const personObject: PersonType = {
      firstName: row[0],
      lastName: row[1],
      description: row[2],
      linkedin: row[3],
      instagram: row[4],
      facebook: row[5],
      twitter: row[6],
      github: row[7],
      behance: row[8],
      stackoverflow: row[9],
      starva: row[10],
      quora: row[11],
      profile: "",
    };
    return personObject;
  });
  return data.slice(1);
};

const findProfilePicIndex = (
  firstName: string,
  lastName: string,
  imageNames: (string | undefined)[]
) => {
  for (let i = 0; i < imageNames.length; i++) {
    if (imageNames[i]?.includes(firstName.toLowerCase())) {
      return i;
    }
    if (imageNames[i]?.includes(lastName.toLowerCase())) {
      return i;
    }
  }
  return -1;
};

export const mapProfilePicToIntro = (
  people: PersonType[] | undefined,
  images: ImageListType
) => {
  const imageNames = images.map((image) => image.file?.name.toLowerCase());
  const imageUrls = images.map((image) => (image.dataURL ? image.dataURL : ""));
  const mappedPeople = people ? [...people] : [];
  for (let person of mappedPeople) {
    const profilePicIndex = findProfilePicIndex(
      person.firstName,
      person.lastName,
      imageNames
    );
    if (profilePicIndex >= 0) {
      person.profile = imageUrls[profilePicIndex];
    } else {
      person.profile = "";
    }
  }
  return mappedPeople;
};
