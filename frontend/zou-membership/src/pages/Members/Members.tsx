import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Grid,
  TextInput,
  Heading,
  Layer,
  Paragraph,
} from "grommet";
import React, { useEffect, useState } from "react";
import "./Members.css";
import { Mail, Phone } from "grommet-icons";
import { useTranslation } from "react-i18next";
import PhoneMask from "../../ZouUtils";
import {
  MemberView,
  PaymentFrequency,
  PaymentType,
} from "../../models/MemberModels";
import MemberModal from "../../components/MemberModal/MemberModal";

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberView[]>();
  const [selectedMember, setSelectedMember] = useState<MemberView>();
  const [searchText, setSearchText] = useState<string>();
  const [showMemberModal, setShowMemberModal] = useState<boolean>(false);
  const { t } = useTranslation();

  const onCloseMemberModal = () => setShowMemberModal(false);
  const onMemberClick = (member: MemberView) => {
    setShowMemberModal(true);
    setSelectedMember(member)
  };

  useEffect(() => {
    setMembers([
      {
        name: "Adineia Barbosa",
        enterDate: new Date(),
        paymentDay: 20,
        paymentFrequency: PaymentFrequency.Bianually,
        phoneNumber: "993968572",
        planType: "3x livre",
        paymentType: PaymentType.Cash,
        address: "Rua roquete mendonça, 64, bairro são josé pampulha",
        email: "lmouraveloso@gmail.com",
        officialId: "12345678902",
        dateOfBirth: new Date(),
        creditCard: {
            cardNumber: "1234 5432 6789 9876",
            cvc: "123",
            expiration: "04/99"
        }
      },
    ]);
  }, []);

  return (
    <Box fill>
      <Heading>{t("members.title")}</Heading>
      <TextInput
        placeholder={t("search.bar.text")}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Grid columns={["auto auto auto"]} gap="small" pad="18px">
        {members
          ?.filter((m) =>
            m.name.toLowerCase().includes(searchText?.toLowerCase() ?? "")
          )
          .map((m, i) => (
            <Card onClick={() => onMemberClick(m)} hoverIndicator elevation="large" width="medium">
              <CardBody height="small"></CardBody>
              <Box pad={{ horizontal: "medium" }} responsive={false}>
                <Heading level="3" margin={{ vertical: "medium" }}>
                    {m.name}
                </Heading>
                <Paragraph margin={{ top: "none" }}>
                    {t("member.since")}: {m.enterDate.toLocaleDateString()} <br/>
                    {m.planType} - {m.paymentType} - {t('member.payday')}: {m.paymentDay}
                </Paragraph>
              </Box>
              <CardFooter
                justify="start"
                pad={{ horizontal: "small" }}
                background="light-2"
              >
                {m.phoneNumber && <Phone></Phone>}
                {m.phoneNumber && <p>{PhoneMask(m.phoneNumber)}</p>}
                {!m.phoneNumber && m.email && <Mail></Mail>}
                {!m.phoneNumber && m.email && <p>{m.phoneNumber}</p>}
              </CardFooter>
            </Card>
          ))}
      </Grid>

      {showMemberModal && (
        <Layer
          position="center"
          onClickOutside={onCloseMemberModal}
          onEsc={onCloseMemberModal}
        >
          <MemberModal member={selectedMember} onCloseClick={() => setShowMemberModal(false)}></MemberModal>
        </Layer>
      )}
    </Box>
  );
};

export default Members;
