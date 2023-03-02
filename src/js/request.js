import loderToggle from "./loader";

const request = async (resource) => {
  loderToggle(true);
  const req = await fetch(resource);

  console.log(req);
  if (!req.ok) {
    loderToggle(false);
    throw new Error("Somsing wrong ):");
  }

  const data = await req.json();
  loderToggle(false);
  return data;
};

export default request;
