const getFinalItemPrice = ({
  price,
  discount,
  quntity,
}: {
  price: number;
  quntity: number;
  discount: number;
}) => (price - (price * discount) / 100) * quntity;

export default getFinalItemPrice;
