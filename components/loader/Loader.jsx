import React from "react";

const Loader = () => {
  return (
    <div className>
      <div className="preloader">
        <div className="w-auto h-auto mx-auto my-auto">
          <div className="pen">
            <div className="">
              <img
                src="/assets/images/STS-logo.png"
                alt
                style={{ maxWidth: "280px", maxHeight: "242px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
