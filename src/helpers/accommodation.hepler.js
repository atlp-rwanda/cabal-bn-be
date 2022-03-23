/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

export const formatLikeOne = (accommodation) => {
  if (!accommodation) return accommodation;

  const likesArr = accommodation.Likes;

  let likes = 0;

  for (let i = 0; i < likesArr.length; i++) {
    const like = likesArr[i];

    if (like.like) {
      likes++;
    }
  }

  accommodation.dataValues.likes = likes;
  delete accommodation.dataValues.Likes;

  return accommodation;
};

export const formatLikeMany = (accommodations) => {
  if (!accommodations) return accommodations;

  const all = [...accommodations.rows];
  const formattedRows = [];

  for (let i = 0; i < all.length; i++) {
    formattedRows.push(formatLikeOne(all[i]));
  }

  accommodations.rows = formattedRows;

  return accommodations;
};
