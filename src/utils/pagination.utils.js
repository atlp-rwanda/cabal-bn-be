/* eslint-disable no-nested-ternary */
export const getPagination = (page, limit) => {
  const newLimit = limit ? +limit : 3;
  const offset = page ? +page * newLimit : 0;
  return { newLimit, offset };
};

export const getPaginatedData = (unPaginatedData, page, limit) => {
  const { count: totalItems, rows: results } = unPaginatedData;
  const totalpages = Math.ceil(totalItems / limit);
  const currentpage = page ? +page : totalpages === 1 ? 1 : 1;

  return { pagination: { totalItems, totalpages, currentpage }, results };
};
