export const FetchPost = async (endpoint, body) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
  const response = await fetch(endpoint, requestOptions);
  return await response.json();
};

export const FetchPhotos = async (endpoint, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(endpoint, requestOptions);
  return await response.json();
};

export const FetchApi = async (endpoint, token, method) => {
  const requestOptions = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(endpoint, requestOptions);
  return await response.json();
};

export const FetchApiWithBody = async (endpoint, token, body) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body,
  };

  const response = await fetch(endpoint, requestOptions);
  return await response.json();
};
