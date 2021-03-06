import React from "react";
import siteConfig from "../../../data/SiteConfig";
import AvatarLinks from "./AvatarLinks";
import logo from "../../../data/logo.png";

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const SmallAvatar = props => {
  const { avatar } = siteConfig;
  const { siteTitle } = siteConfig;

  return (
    <>
      <Styled.h2
        sx={{
          mt: 5,
          color: `primary`,
          mb: 0,
          borderTop: `1px solid`,
          pt: "15px",
          textAlign: `center`
        }}
      >
        {siteTitle}
      </Styled.h2>

      <div sx={{ display: `flex`, alignItems: `center`, mb: 2, mt: 2 }}>
      <img src= { logo }/>
        <Styled.p>{avatar.description}</Styled.p>
      </div>
      <div sx={{ textAlign: `left` }}>
        <AvatarLinks size={"small"} />
      </div>
    </>
  );
};

export default SmallAvatar;
