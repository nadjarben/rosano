import React from "react";
import { useTranslation } from 'react-i18next'
import Button from "@material-ui/core/Button";


const ImagePicker = ({ client, setClient}) => {
  const { t } = useTranslation()
    const [image, setImage] = React.useState(client.tehudaImage);
    const [loading, setLoading] = React.useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append('upload_preset', 'rosano')
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dox0xz1yq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  React.useEffect(() => {
    setClient({ ...client, tehudaImage: image })
  }, [image])

  return (
    <div>
      <h5>{t("Upload tehuda zeut")}</h5>
      <div style={{cursor: 'pointer'}}>
      {!image && <input
        type="file"
        name="file"
        placeholder="Upload tehuda zeut"
        onChange={uploadImage}
      />}
      {image && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setImage("")}
        >
          {t("Remove Cover")}
        </Button>
      )}
      <br/>
      <br/>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        <img src={image} style={{ width: "200px" }} />
      )}
    </div>
    </div>
  );
};

export default ImagePicker;
