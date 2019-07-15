export const domain = "http://localhost:5500/";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
  //"Access-Control-Allow-Origin": "*"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};
