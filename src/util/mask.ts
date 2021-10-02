// 000.000.000-00
export const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
export const maskMoney = (value: string | number) => {
  if (typeof value === "number") {
    value = value.toFixed(2).toString();
  }
  if (value) {
    value = value.replace(/\D/g, ""); // permite digitar apenas numero
    value = value.replace(/(\d{1})(\d{14})$/, "$1.$2"); // coloca ponto antes dos ultimos digitos
    value = value.replace(/(\d{1})(\d{11})$/, "$1.$2"); // coloca ponto antes dos ultimos 11 digitos
    value = value.replace(/(\d{1})(\d{8})$/, "$1.$2"); // coloca ponto antes dos ultimos 8 digitos
    value = value.replace(/(\d{1})(\d{5})$/, "$1.$2"); // coloca ponto antes dos ultimos 5 digitos
    value = value.replace(/(\d{1})(\d{1,2})$/, "$1,$2"); // coloca valueirgula antes dos ultimos 2 digitos
  }
  return value;
};
// (00) 00000-0000
export const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

// 00000-000
export const maskCEP = (value: string) => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

// 00/00/0000
export const maskDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

// Aceita apenas que letras sejam digitadas
export const maskOnlyLetters = (value: string) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// Aceita apenas números
export const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, "");
};
