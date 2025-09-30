"use client";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Menu } from "lucide-react";
import HeaderMenu from "./HeaderMenu";
import UserInfo from "./UserInfo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Skeleton } from "./ui/skeleton";

type PropsType = {
  userInfo: {
    imageUrl: string | undefined;
    name: string | null | undefined;
    id: string | undefined;
  };
};

const Header = (props: PropsType) => {
  const { userInfo } = props;
  console.log("userInfo", userInfo);
  return (
    <div>
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          {/* Desktop Menu */}
          <HeaderMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <AuthLoading>
              <Skeleton className="h-[32px] w-[32px] rounded-full" />
            </AuthLoading>
            <Authenticated>
              <UserInfo userInfo={userInfo} />
            </Authenticated>
            <Unauthenticated>
              <SignInButton>
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex cursor-pointer"
                >
                  Sign In
                </Button>
              </SignInButton>
            </Unauthenticated>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <HeaderMenu orientation="vertical" className="mt-12" />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
