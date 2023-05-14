import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="grow bg-orange rounded-tl-xl rounded-bl-xl">{children}</div>
  );
};

export default ContentContainer;
