import Image from "next/image";

type PropsType = {
  userInfo: {
    imageUrl: string | undefined;
    email: string | undefined;
    name: string | null | undefined;
    id: string | undefined;
  };
};

const UserInfo = (props: PropsType) => {
  const { userInfo } = props;
  return (
    <div>
      <Image
        src={userInfo.imageUrl || ""}
        alt={userInfo.name || ""}
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  );
};

export default UserInfo;
