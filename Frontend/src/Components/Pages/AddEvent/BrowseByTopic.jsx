const topics = [
  "Engineering",
  "Social Sciences and Humanities",
  "Interdisciplinary",
  "Health and Medicine",
  "Regional Studies",
  "Mathematics and statistics",
  "Business and Economics",
  "Law",
  "Education",
  "Life Science",
];

import React, { useState } from "react";

function BrowseByTopics() {
  const [isActive, setIsActive] = useState(false);

  // Flatten the list and exclude "India"
  const topic = Object.values(topics).flat();

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-gray-100 p-4" style={{ borderRadius: "4px" }}>
      {/* Heading - Hidden on Mobile */}
      <h2
        className="text-2xl cursor-pointer border-red border-gray items-center mb-4 justify-between md:block hidden"
        onClick={toggleDropdown}
        aria-expanded={isActive}
      >
        Browse By City
      </h2>

      <div className="space-y-2">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="world"
              height="20"
              width="20"
            >
              <path d="M380.239,366.9c10.484-31.228,16.367-65.871,17.108-102.9h84.316c-1.7,52.889-20.2,102.726-52.873,142.893A239.972,239.972,0,0,0,380.239,366.9ZM82.661,406.217C50.333,366.168,32.025,316.593,30.337,264h84.316c.737,36.8,6.551,71.256,16.917,102.337A237.886,237.886,0,0,0,82.661,406.217Zm48.91-260.554C121.2,176.745,115.39,211.2,114.654,248H30.337c1.688-52.593,20-102.168,52.324-142.217A237.859,237.859,0,0,0,131.571,145.663ZM264,180.605a234.363,234.363,0,0,0,102.077-27.334c9.313,28.811,14.557,60.686,15.267,94.729H264Zm0-16.013V23.716c43.712,23.54,76.895,63.485,96.654,114.3A218.435,218.435,0,0,1,264,164.592Zm-16,0a221.519,221.519,0,0,1-96.835-26.11C170.9,87.446,204.156,47.329,248,23.716Zm0,16.012V248H130.656c.707-33.867,5.9-65.586,15.125-94.28A237.483,237.483,0,0,0,248,180.607ZM130.656,264H248v67.393a237.478,237.478,0,0,0-102.22,26.888C136.557,329.587,131.363,297.867,130.656,264ZM248,347.405V488.284c-43.845-23.612-77.1-63.728-96.836-114.768A221.5,221.5,0,0,1,248,347.405Zm16,0a218.431,218.431,0,0,1,96.654,26.572C340.9,424.8,307.712,464.744,264,488.284Zm0-16.013V264H381.344c-.71,34.043-5.954,65.918-15.268,94.729A234.355,234.355,0,0,0,264,331.4ZM397.347,248c-.741-37.027-6.624-71.67-17.108-102.9a240,240,0,0,0,48.551-40c32.669,40.167,51.175,90,52.873,142.893ZM415.569,90.162c.892.925,1.763,1.865,2.638,2.8A224.194,224.194,0,0,1,374.6,129.74c-17.279-43.257-43.893-79.079-78.215-104.4C341.28,33.714,382.616,56,415.569,90.162ZM215.617,25.344c-34.468,25.425-61.162,61.445-78.434,104.949a221.95,221.95,0,0,1-44-36.684c1.072-1.156,2.148-2.31,3.245-3.447C129.385,56,170.722,33.713,215.617,25.344ZM96.431,421.838c-1.1-1.137-2.173-2.291-3.245-3.447a222,222,0,0,1,44-36.683c17.272,43.5,43.965,79.524,78.433,104.947C170.72,478.286,129.384,456,96.431,421.838Zm199.954,64.817c34.322-25.316,60.936-61.138,78.215-104.395a224.194,224.194,0,0,1,43.607,36.776c-.875.937-1.746,1.877-2.638,2.8C382.616,456,341.28,478.286,296.385,486.655Z"></path>
            </svg>
            <a className="text-gray-800 ms-2 cursor-pointer">{topic}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByTopics;
