"use client";

import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="Uploaded Image Not Found"
        />
      )}
      <CldUploadWidget
        uploadPreset="jjyzftfd"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
