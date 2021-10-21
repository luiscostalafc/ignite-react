export function moneyConvert(money: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(money)
}

export function dateConvert(date: string | Date) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date))
}