import { readFile } from "fs/promises";
import isNull from "../tools/isNull.js";

const movieData = JSON.parse(
  await readFile("./contents_data/movie/Disney Plus_movie", "utf8")
);
