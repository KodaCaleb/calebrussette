import { projectData } from "../assets/projectData.js";



export default function ProjectSelector() {
  return (
    <div className=" justify-center p-4 flex  w-full h-full">
      <div className=" justify-center flex h-full m-1 w-1/2">
        <div className="  ml-2 text-themeWhite self-center justify-center flex-col flex h-4/5 w-full">
            <div className="h-2/5 flex flex-col ml-14 justify-evenly">
                <h1 className="text-3xl">
                    Lorem ipsum dolor sit amet 
                </h1>
                <h2 className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio tenetur doloribus numquam vero, fugit atque veniam dolores consequuntur maxime omnis, cumque, similique ipsum odio eius hic exercitationem tempore adipisci.
                </h2>
            </div>
        </div>
      </div>
      <div className="justify-center flex h-full m-1 w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex self-center justify-evenly text-themeWhite flex-col w-full h-2/3">
            { projectData.map((data, key) => {
                return ( 
                    <button key={key} className="self-end">
                        {data.title}
                    </button>
                )
            })}
          </div>
        </div>
      </div>
    </div>


  );
}
