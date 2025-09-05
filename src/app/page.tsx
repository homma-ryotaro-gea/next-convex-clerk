"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Authenticated>
          <UserButton />
          <Content />
        </Authenticated>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
      </main>
    </div>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}
