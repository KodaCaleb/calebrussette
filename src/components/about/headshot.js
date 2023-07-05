export default function Headshot() {
  return (
    <div className=" h-full w-full flex flex-row justify-start ">
      <div className=" h-auto w-full flex flex-col justify-center items-center p-10 ">
        <img
          src="./Avatar.jpg"
          className=" w-96 border-b border-themePurple flex rounded-3xl drop-shadow-xl h-auto"
          alt=""
        />
      </div>
    </div>
  );
}
