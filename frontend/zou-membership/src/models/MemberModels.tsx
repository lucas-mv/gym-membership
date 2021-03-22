export interface MemberView {
  name: string;
  enterDate: Date;
  paymentDay: number;
  paymentFrequency: PaymentFrequency;
  planType: string;
  phoneNumber?: string;
  email?: string;
  dateOfBirth?: Date;
  officialId?: string;
  address?: string;
  paymentType: PaymentType;
  creditCard?: CreditCard;
}

export interface CreditCard {
    cardNumber: string,
    expiration: string,
    cvc: string
}

export enum PaymentFrequency {
    NA = 0,
    Monthly,
    Quarterly,
    Bianually,
    Anually
}

export enum PlanType {
    NA = 0,
    Week3xEconomic,
    Week5xEconomic,
    Week3xFree,
    Week5xFree,
}

export enum PaymentType {
    NA = 0,
    Cash,
    Debit,
    Credit,
    Check,
    CreditRecurring
}
