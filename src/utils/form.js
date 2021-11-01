export function non_empty_rule(value) {
  if (typeof value == "string") {
    if (value.length > 0) return true;
    else return "Campo Obrigatório";
  } else {
    if (value?.size > 0) return true;
    else return "Campo Obrigatório";
  }
}

export function email_rule(email) {
  if (email == "") return "Campo Obrigatório";
  if (!/.+@.+\..+/.test(email)) return "E-mail inválido";
  return true;
}
