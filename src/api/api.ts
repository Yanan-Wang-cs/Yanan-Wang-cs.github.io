import service from ".";

export const getStaticFile = (url: string) =>
  service({
    url,
    method: "GET",
  });
