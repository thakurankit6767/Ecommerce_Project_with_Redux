import React from "react";
import { Image } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <div>
      <div>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/12062022-D-unisex-topbanner-p1-BBS-5090.jpg"
          alt="image"
        />
      </div>
      <div style={{ display: "flex" }}>
        <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/48f59438-2806-47c5-bc44-e6b6882865c71653643704628-QL_Watches.jpg"
          alt="image"
          
        />
        <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg"
          alt="image"
        />
        <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg"
          alt="image"
        />
        <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg"
          alt="image"
        />
        {/* <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg"
          alt="image"
        /> */}
      </div>
    </div>
  );
};

export default Homepage;
