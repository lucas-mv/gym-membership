import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { PaymentFrequency, PaymentType } from "./models/MemberModels";

const resources = {
  en: {
    translation: {
      "search.bar.text": "Search by name",
      "credit.card": "Credit card",
      cash: "Cash",
      "debit.card": "Debit card",
      check: "Check",
      "credit.recurring": "Recurring credit",
      "members.title": "Members",
      "member.since": "Member since",
      "member.payday": "Payday",
      payment: "Payment",
      anually: "Anually",
      bianually: "Bianually",
      quarterly: "Quarterly",
      monthly: "Monthly",
    },
  },
  pt: {
    translation: {
      "search.bar.text": "Pesquise por nome",
      "credit.card": "Cartão de crédito",
      cash: "Dinheiro",
      "debit.card": "Cartão de débito",
      check: "Cheque",
      "credit.recurring": "Crédito recorrente",
      "members.title": "Membros",
      "member.since": "Membro desde",
      "member.payday": "Dia do pagamento",
      payment: "Payment",
      anually: "Anual",
      bianually: "Semestral",
      quarterly: "Trimestral",
      monthly: "Mensal",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const MapPaymentFrequency = (t: any, f?: PaymentFrequency): string => {
  if (!f) return "";
  switch (f) {
    case PaymentFrequency.Anually:
      return t("anually");
    case PaymentFrequency.Bianually:
      return t("bianually");
    case PaymentFrequency.Monthly:
      return t("monthly");
    case PaymentFrequency.Quarterly:
      return t("quarterly");
    default:
      return "";
  }
};

export const MapPaymentType = (t: any, p?: PaymentType): string => {
  if (!p) return "";
  switch (p) {
    case PaymentType.Cash:
      return t("cash");
    case PaymentType.Check:
      return t("check");
    case PaymentType.Credit:
      return t("credit.card");
    case PaymentType.CreditRecurring:
      return t("credit.recurring");
    case PaymentType.Debit:
      return t("debit.card");
    default:
      return "";
  }
};
