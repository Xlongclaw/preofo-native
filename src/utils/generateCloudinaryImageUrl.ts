import { EXPO_PUBLIC_CLOUD_NAME } from "constants/secrets";

const generateCloudinaryImageUrl = async (uri: string) => {
  let file: any = {
    uri: uri,
    type: `test/${uri.split(".")[1]}`,
    name: `test.${uri.split(".")[1]}`,
  };
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "rffgewyy");
  data.append("cloud_name", `${process.env.CLOUD_NAME}`);

  const res = await fetch(
    `http://api.cloudinary.com/v1_1/${EXPO_PUBLIC_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );
  const imageData = await res.json();
  return {
    url: imageData.url,
    signature: imageData.signature,
    publicId: imageData.public_id,
  };
};

export default generateCloudinaryImageUrl;
