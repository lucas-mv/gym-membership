import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Paragraph,
} from "grommet";
import {
  Phone,
  Mail,
  DocumentUser,
  MapLocation,
  Gift,
  CreditCard,
  Atm,
  Calendar,
  Close,
} from "grommet-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { MemberView } from "../../models/MemberModels";
import { MapPaymentFrequency, MapPaymentType } from "../../ZouI18n";
import PhoneMask from "../../ZouUtils";
import "./MemberModal.css";

interface MemberModalProps {
  member?: MemberView;
  onCloseClick: () => void
}

const MemberModal: React.FC<MemberModalProps> = ({ member, onCloseClick }) => {
  const { t } = useTranslation();

  return (
    <Card fill elevation="large" width="medium">
      <Grid
        fill
        pad="small"
        rows={["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"]}
        columns={["1/3", "1/3", "1/3"]}
        areas={[
          ["name", "name", "closebutton"],
          ["membersince", "membersince", "plantype"],
          ["phone", "email", "email"],
          ["dateofbirth", "officialid", "officialid"],
          ["address", "address", "address"],
          ["payment", "payment", "payment"],
          ["paymentfrequency", "paymenttype", "paymentday"],
          ["creditcardtitle", "creditcardtitle", "creditcardtitle"],
          ["cardnumber", "cardexpiration", "cardcode"],
        ]}
        gap="small"
      >
        <Box gridArea="name">
          <Heading level="3" margin={{ vertical: "medium" }}>
            {member?.name}
          </Heading>
        </Box>
        <Box gridArea="closebutton" justify="end" direction="row" pad="medium">
            <Button plain icon={<Close />} onClick={() => onCloseClick()} />
        </Box>
        <Box gridArea="membersince">
          {t("member.since")}: {member?.enterDate.toLocaleDateString()}
        </Box>
        <Box gridArea="plantype">{member?.planType}</Box>
        <Box gridArea="phone" direction="row" gap="xxsmall">
          <Phone></Phone> {PhoneMask(member?.phoneNumber)}
        </Box>
        <Box gridArea="email" direction="row" gap="xxsmall">
          <Mail></Mail> {member?.email}
        </Box>
        <Box gridArea="dateofbirth" direction="row" gap="xxsmall">
          <Gift></Gift> {member?.dateOfBirth?.toLocaleDateString()}
        </Box>
        <Box gridArea="officialid" direction="row" gap="xxsmall">
          <DocumentUser></DocumentUser> {member?.officialId}
        </Box>
        <Box gridArea="address" direction="row" gap="xxsmall">
          <MapLocation></MapLocation> {member?.address}
        </Box>
        <Box gridArea="payment" direction="row" gap="xxsmall">
          <Heading level="4">{t("payment")}</Heading>
        </Box>
        <Box gridArea="paymentfrequency" direction="row" gap="xxsmall">
          {MapPaymentFrequency(t, member?.paymentFrequency)}
        </Box>
        <Box gridArea="paymenttype" direction="row" gap="xxsmall">
          {MapPaymentType(t, member?.paymentType)}
        </Box>
        <Box gridArea="paymentday" direction="row" gap="xxsmall">
          {t("member.payday") + ": " + member?.paymentDay}
        </Box>
        {member?.creditCard && (
          <Box gridArea="creditcardtitle" direction="row" gap="xxsmall">
            <Heading level="4">{t("credit.card")}</Heading>
          </Box>
        )}
        {member?.creditCard?.cardNumber && (
          <Box gridArea="cardnumber" direction="row" gap="xxsmall">
            <CreditCard></CreditCard> {member?.creditCard?.cardNumber}
          </Box>
        )}
        {member?.creditCard?.expiration && (
          <Box gridArea="cardexpiration" direction="row" gap="xxsmall">
            <Calendar></Calendar> {member?.creditCard?.expiration}
          </Box>
        )}
        {member?.creditCard?.cvc && (
          <Box gridArea="cardcode" direction="row" gap="xxsmall">
            <Atm></Atm> {member?.creditCard?.cvc}
          </Box>
        )}
      </Grid>
    </Card>
  );
};

export default MemberModal;
