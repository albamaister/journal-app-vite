import { fileUpload } from "../../src/helpers/fileUpload";

describe("Test in fileUpload", () => {
  test("should upload file success", async() => {
    const imageUrl =
      'https://res.cloudinary.com/storage-course/image/upload/v1690261196/journal/ttcecrvlkn1ofzpc859n.png'
    const resp = await fetch(imageUrl);


    const se = await resp.blob();
    const file = new File([se], 'foto.png');
    console.log(file);
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });
});
