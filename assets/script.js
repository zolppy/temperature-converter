const celsiusField = document.querySelector("#celsius");
const fahrenheitField = document.querySelector("#fahrenheit");
const kelvinField = document.querySelector("#kelvin");

const clearField = (field) => (field.value = "");

const c2f = (c) => (9 / 5) * c + 32;
const c2k = (c) => c + 273.15;
const f2c = (f) => (f - 32) * (5 / 9);
const f2k = (f) => (f - 32) * (5 / 9) + 273.15;
const k2c = (k) => k - 273.15;
const k2f = (k) => (k - 273.15) * 1.8 + 32;

const showC = (c) => (celsiusField.value = c);
const showF = (f) => (fahrenheitField.value = f);
const showK = (k) => (kelvinField.value = k);

celsiusField.addEventListener("input", function () {
  const c = parseFloat(this.value);
  const f = c2f(c);
  const k = c2k(c);

  showF(f.toFixed(2));
  showK(k.toFixed(2));
});

fahrenheitField.addEventListener("input", function () {
  const f = parseFloat(this.value);
  const c = f2c(f);
  const k = f2k(f);

  showC(c.toFixed(2));
  showK(k.toFixed(2));
});

kelvinField.addEventListener("input", function () {
  const k = parseFloat(this.value);
  const c = k2c(k);
  const f = k2f(k);

  showC(c.toFixed(2));
  showF(f.toFixed(2));
});

document.addEventListener("DOMContentLoaded", () => {
  clearField(celsiusField);
  clearField(fahrenheitField);
  clearField(kelvinField);
});
