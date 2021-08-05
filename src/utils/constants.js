// export const backendUrlPrefix = 'http://localhost:5000/api/v1';
export const backendUrlPrefix = 'https://kings-be.herokuapp.com/api/v1';
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDay() + 1;
  const year = date.getFullYear();
  return `${day > 9 ? day : `0${day}`}/${month}/${year}`;
};
