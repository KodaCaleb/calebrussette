import FileSaver from "file-saver";

export default function DownloadCV() {
  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/assets/CV.pdf",
      "CalebRussetteCV.pdf"
    );
  };

  return (
    <button
      onClick={saveFile}
      className="gradient-background font-extralight drop-shadow-xl text-themeWhite border-themeBlack border-opacity-40 border p-2 rounded-lg hover:border-themeWhite  hover:border-opacity-90 "
    >
      Download CV
    </button>
  );
}
