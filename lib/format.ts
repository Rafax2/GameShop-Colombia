export function formatPrice(value: number, currency = "EUR") {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
  }).format(value);
}

export function formatRating(value: number) {
  return value.toFixed(1);
}
