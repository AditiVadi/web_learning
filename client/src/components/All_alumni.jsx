/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Remove the alumniData import if it's not used from "../constants/index"

const All_alumni = () => {
    const navigate = useNavigate();
  // Define alumniData only inside the component if it's not coming from an external source
  const alumniData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3DclYFp64aGjsFtm1y20-etV8vzQR26xFDizfKPuSiCVFGM4TY6Hcp07qgp50eTyGHE&usqp=CAU",
      name: "John Doe",
      stream: "Computer Science",
      branch: "CE",
      passoutYear: "2020",
      careerChoice: "Software Engineer",
      batch: "Batch 2020",
      verified: true
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Kavan Bakori",
        stream: "Information Technology",
        branch: "IT",
        passoutYear: "2022",
        careerChoice: "Web developer",
        batch: "Batch 2019",
        verified: true
      },
      {
        id: 3,
        image: "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
        name: "Alice Johnson",
        stream: "Electrical Engineering",
        branch: "EE",
        passoutYear: "2018",
        careerChoice: "Electrical Engineer",
        batch: "Batch 2018",
        verified: true
      },
      {
        id: 4,
        image: "https://media.istockphoto.com/id/1372065700/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=oPRp9aiGEb_00Y0Q_eR40MiOisM2eFfeP7lDf0IqJDw=",
        name: "Bob Brown",
        stream: "Mechanical Engineering",
        branch: "ME",
        passoutYear: "2021",
        careerChoice: "Mechanical Engineer",
        batch: "Batch 2021",
        verified: true
      },
      {
        id: 5,
        image: "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
        name: "Eve Davis",
        stream: "Civil Engineering",
        branch: "CE",
        passoutYear: "2022",
        careerChoice: "Civil Engineer",
        batch: "Batch 2022",
        verified: true
      },
      {
        id: 6,
        image: "https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=",
        name: "Charlie Wilson",
        stream: "Chemical Engineering",
        branch: "CHE",
        passoutYear: "2017",
        careerChoice: "Chemical Engineer",
        batch: "Batch 2017",
        verified: true
      },
      {
        id: 7,
        image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww",
        name: "Diana Clark",
        stream: "Biotechnology",
        branch: "BT",
        passoutYear: "2021",
        careerChoice: "Biotechnologist",
        batch: "Batch 2021",
        verified: true
      },
      {
        id: 8,
        image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
        name: "Frank Martinez",
        stream: "Computer Science",
        branch: "CS",
        passoutYear: "2020",
        careerChoice: "Full Stack Developer",
        batch: "Batch 2020",
        verified: false
      },
      {
        id: 9,
        image: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
        name: "Grace Lee",
        stream: "Information Technology",
        branch: "IT",
        passoutYear: "2019",
        careerChoice: "UX/UI Designer",
        batch: "Batch 2019",
        verified: true
      },
      {
        id: 10,
        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        name: "Henry Walker",
        stream: "Electrical Engineering",
        branch: "EE",
        passoutYear: "2018",
        careerChoice: "Power Systems Engineer",
        batch: "Batch 2018",
        verified: false
      },
      {
        id: 11,
        image: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
        name: "Ivy Lewis",
        stream: "Mechanical Engineering",
        branch: "ME",
        passoutYear: "2022",
        careerChoice: "Automotive Engineer",
        batch: "Batch 2022",
        verified: true
      }
  ];

  const [visibleItems, setVisibleItems] = useState(12); // Initial number of visible alumni
  const loadMoreItems = 8;

  const currentAlumni = alumniData.slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + loadMoreItems, alumniData.length)
    );
  };

  return (
    <div style={{marginTop:'60px'}} className="flex flex-col p-4">
      <div className="bg-teal-500 p-2">
        <SearchBar />
        <Filters />
      </div>

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentAlumni.map((alumni) => (
          <AlumniCard
            key={alumni.id}  // Ensure key is unique and avoid key warnings
            image={alumni.image}
            verified={alumni.verified}
            name={alumni.name}
            stream={alumni.stream}
            branch={alumni.branch}
            passoutYear={alumni.passoutYear}
            careerChoice={alumni.careerChoice}
            batch={alumni.batch}
            navigate={navigate}
          />
        ))}
      </div>

      {visibleItems < alumniData.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div  className="mb-4 px-4 pt-3 w-full">
      <div
        className={`relative flex items-center justify-between border-[2px] ${
          isFocused ? "border-secondary shadow-lg" : "border-dimBlue"
        } rounded-md transition duration-300 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 w-5 h-5 text-gray-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            clipRule="evenodd"
          />
        </svg>

        <input
          type="text"
          placeholder="Search Alumni..."
          className="w-full p-3 pl-10 pr-12 text-sm border-none outline-none rounded-md focus:ring-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <button className="absolute right-1 text-gray-600 border-r-lg hover:text-secondary focus:outline-none ">
          <svg
            className="w-9 h-9 stroke-secondary hover:stroke-blue-500 active:stroke-black active:stroke-2 transition-all duration-300"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <g fill="none">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="9" cy="9" r="5" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="w-full p-2 rounded-md mb-4 flex flex-wrap gap-4 justify-around ">
      <div className="w-1/7">
        <CustomSelect options={["2020", "2021", "2022"]} placeholder="Enter Batch" />
      </div>
      <div className="w-1/7">
        <CustomSelect options={["2018", "2019", "2020"]} placeholder="Enter Passout Year" />
      </div>
      <div className="w-1/7">
        <CustomSelect options={["AI", "Web Development", "Data Science"]} placeholder="Enter Interest" />
      </div>
      <div className="w-1/7">
        <CustomSelect options={["Placed", "Not Placed"]} placeholder="Placement Status" />
      </div>
      <div className="w-1/7">
        <CustomSelect options={["5 LPA", "10 LPA", "15 LPA"]} placeholder="Enter Package" />
      </div>
      <div className="w-1/7">
        <CustomSelect options={["Higher Studies", "Placement"]} placeholder="Higher Studies/Placement" />
      </div>
    </div>
  );
}

function AlumniCard({
  image,
  verified,
  name,
  stream,
  branch,
  passoutYear,
  careerChoice,
  batch,
  navigate,
}) 
{
  return (
    <div onClick={()=> navigate('/alumniprofile')} className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center cursor-pointer mb-4 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[20px] font-bold">{name}</h3>
            <h5 className="text-[15px] font-sans">{batch}</h5>
          </div>
          {verified && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <p className="text-gray-700">Stream: {stream}</p>
        {/* <p className="text-gray-700">Branch: {branch}</p> */}
        <p className="text-gray-600">Passout Year: {passoutYear}</p>
        <p className="text-gray-600">Career Choice: {careerChoice}</p>
      </div>
    </div>
  );
}

function CustomSelect({ options, placeholder }) {
  const [selected, setSelected] = useState(placeholder || "Select an option");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 sm:p-3 w-full border border-secondary bg-white rounded-md cursor-pointer flex justify-between items-center"
      >
        <span className="text-sm sm:text-base">{selected}</span>
        <span className="ml-2">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 13.586l3.293-3.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-56 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-teal-500 hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default All_alumni;
