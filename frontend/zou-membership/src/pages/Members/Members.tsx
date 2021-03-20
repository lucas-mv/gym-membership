import { Tag, Space, List, Skeleton, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import "./Members.css";

interface MemberView {
  name: string;
  enterDate: Date;
  paymentDay: number;
  paymentType: string;
  planType: string;
  phoneNumber: string;
}

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberView[]>();

  useEffect(() => {
      setMembers([
        {
          name: "Adineia Barbosa",
          enterDate: new Date(),
          paymentDay: 20,
          paymentType: "Mensal",
          phoneNumber: "993968572",
          planType: "3x livre",
        },
        {
          name: "Adineia Barbosa",
          enterDate: new Date(),
          paymentDay: 20,
          paymentType: "Mensal",
          phoneNumber: "993968572",
          planType: "3x livre",
        },
      ])
  },[])

  return (
    <List
      itemLayout="horizontal"
      dataSource={members}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={`${item.enterDate.toLocaleDateString()} - ${
              item.paymentType
            } - ${item.planType} - ${item.phoneNumber}`}
          />
        </List.Item>
      )}
    />
  );
};

export default Members;
