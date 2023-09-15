import assert from "assert";
import { processLinkedInLink } from "./ProfileTemplateUtils";

describe("Profile Template Test Cases", () => {
  test("Process Linkedin URL link", () => {
    let linkedInLink: string | null =
      "https://www.linkedin.com/in/kamal-abhishek-26327617b/";
    assert.equal(processLinkedInLink(linkedInLink), "kamal-abhishek");
    linkedInLink = "https://www.linkedin.com/in/kamal-abhishek-26327617b";
    assert.equal(processLinkedInLink(linkedInLink), "kamal-abhishek");
    linkedInLink = "https://www.linkedin.com/in/harshitsachdeva06/";
    assert.equal(processLinkedInLink(linkedInLink), "harshitsachdeva06");
    linkedInLink = null;
    assert.equal(processLinkedInLink(linkedInLink), "");
  });
});
