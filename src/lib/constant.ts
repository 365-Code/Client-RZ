export const apiDefaults = {
  limit: 10,
  sortMapping: {
    date_added: "createdAt",
    updated: "updatedAt",
    name: "name",
  } as { [index: string]: string },
  orderMapping: {
    asc: 1,
    desc: -1,
    ascending: 1,
    descending: -1,
  } as { [index: string]: number },
};