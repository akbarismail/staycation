export default (number) => {
  const formatting = new Intl.NumberFormat('id-ID');
  return formatting.format(number);
};
