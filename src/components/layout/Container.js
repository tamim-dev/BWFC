import React from "react";

const Container = ({children}) => {
  return (
    <div className = " container mx-auto mt-7">
        {children}
    </div>
  );
};

export default Container;