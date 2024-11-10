export function formatDate(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}
