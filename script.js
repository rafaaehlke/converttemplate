const USD = 5.57
const EUR = 6.19
const GBP = 7.34

const amount = document.getElementById('amount')
const currency = document.getElementById("currency")
const form = document.querySelector("form") 
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total)

    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    alert("Não foi possivel fazer a conversão")
  }

}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })
}
