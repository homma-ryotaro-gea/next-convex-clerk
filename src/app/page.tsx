import { currentUser } from "@clerk/nextjs/server";

import Header from "@/components/Header";

const HomePage = async () => {
  const user = await currentUser();
  const userInfo = {
    imageUrl: user?.imageUrl,
    name: user?.fullName,
    id: user?.id,
  };
  return (
    <div>
      <Header userInfo={userInfo} />
      <main className="mt-10">
        <h1 className="text-center text-4xl font-bold">
          Welcome to the Home Page
        </h1>
      </main>
    </div>
  );
};

export default HomePage;
