export default function ProjectSelector() {
  return (
    <div className=" justify-center p-4 flex  w-full h-full">
      <div className=" justify-center flex h-full m-1 w-1/2">
        <div className=" border-2 ml-2 text-themeBlue self-center flex h-4/5 w-full">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h1>
        </div>
      </div>
      <div className="justify-center flex h-full m-1 w-1/2">
        <div className="flex w-1/2 ">
          <div className="flex border-2 self-center justify-evenly text-themeBlue flex-col w-full h-2/3">
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
            <button>Option 5</button>
            <button>Option 6</button>
          </div>
        </div>
      </div>
    </div>
  );
}
