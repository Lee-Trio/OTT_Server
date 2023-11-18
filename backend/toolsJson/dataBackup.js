import fs from "fs";
import archiver from "archiver";
import { getTime } from "../tools/getDate.js";

export const dataBackup = async () => {
  const __dirname = "/home/projectpc/teamProject/backend/contents_data";
  const directory = fs.existsSync(
    "/home/projectpc/teamProject/backend/dataBackup.zip"
  );
  if (!directory)
    fs.mkdirSync("/home/projectpc/teamProject/backend/dataBackup.zip");

  const output = fs.createWriteStream(
    `/home/projectpc/teamProject/backend/dataBackup.zip/contents_data.${getTime()}.zip`
  );
  const archive = archiver("zip", {
    zlib: { level: 9 }, // Sets the compression level.
  });

  output.on("close", function () {
    console.log(archive.pointer() + " total bytes");
    console.log(
      "archiver has been finalized and the output file descriptor has closed."
    );
    return "정상적으로 백업이 되었습니다.";
  });

  output.on("end", function () {
    console.log("Data has been drained");
    return "end exit:dataBackup.js > dataBackup";
  });

  archive.on("error", function (err) {
    throw err;
    // return "error exit:dataBackup.js > dataBackup";
  });

  archive.pipe(output);

  archive.directory(__dirname);

  archive.finalize();
};
