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
    searchTitle: { type: String },
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
      searchTitle: { type: String },
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
    ott: { type: Number },
    ottString: { type: String, required: true },
    mt: { type: String },
    description: { type: String, required: true },
    genre: { type: String },
    director: { type: String },
    cast: { type: String },
    year: { type: String },
    film_rating: { type: String },
    season: { type: String },
    rank: { type: String },
  },
  {
    timestamps: true,
    collection: "RankingUnion",
  }
);

export const userSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true },
    userID: { type: String, required: true },
    userPW: { type: String, required: true },
    userEmail: { type: String },
    userPhone: { type: String },
  },
  {
    timestamps: true,
    collection: "userIndex",
  }
);

export const userFavoriteSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    contentIDs: { type: Array, required: true },
  },
  {
    timestamps: true,
    collection: "userFavorite",
  }
);

export const userGoodSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    contentIDs: { type: Array, required: true },
  },
  {
    timestamps: true,
    collection: "userGood",
  }
);

export const userSeeSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    contentIDs: { type: Array, required: true },
  },
  {
    timestamps: true,
    collection: "userSee",
  }
);
