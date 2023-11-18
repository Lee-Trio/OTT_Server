import mongoose from "mongoose";
export const AllDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    href: { type: Array, required: true },
    img: { type: Array, required: true },
    ott: { type: Number, required: true },
    mt: { type: String },
    description: { type: String, required: true },
    genre: { type: String },
    director: { type: String },
    cast: { type: String },
    running_time: { type: String },
    year: { type: String },
    film_rating: { type: String },
    season: { type: String },
  },
  {
    timestamps: true,
    collection: "AllData",
  }
);

export const selectSchema = (OTTType) => {
  const contentSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      href: { type: Array, required: true },
      img: { type: Array, required: true },
      ott: { type: Number, required: true },
      mt: { type: String },
      description: { type: String, required: true },
      genre: { type: String },
      director: { type: String },
      cast: { type: String },
      running_time: { type: String },
      year: { type: String },
      film_rating: { type: String },
      season: { type: String },
    },
    {
      timestamps: true,
      collection: `${OTTType}`,
    }
  );
  return contentSchema;
};

export const rankingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    href: { type: String, required: true },
    img: { type: String, required: true },
    ott: { type: Number, required: true },
    mt: { type: String },
    description: { type: String, required: true },
    genre: { type: String },
    director: { type: String },
    cast: { type: String },
    running_time: { type: String },
    year: { type: String },
    film_rating: { type: String },
    season: { type: String },
  },
  {
    timestamps: true,
    collection: "RankingUnion",
  }
);
