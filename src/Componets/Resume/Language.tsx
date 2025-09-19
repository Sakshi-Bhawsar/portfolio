import React from "react";


const Languages = () => {
  const languageList = ["Hindi", "English"];
  return (
    <div className="border border-gray-700 border-t-purple-400 p-8 rounded-lg mt-8 bg-[#0f172a]">
       <h1 className="text-xl text-center font-bold mb-8 flex items-center gap-2">
        <span className=" rounded-2xl bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700 p-2">🌍</span> 
        Languages
        </h1>
       { 
        languageList.map((lang,index)=>(
            <p key={index}  className=" text-center m-4 rounded-full p-2 bg-gradient-to-r from-cyan-700 to-purple-600">{lang}</p>
        ))
       }
    </div>
  );
};

export default Languages;
