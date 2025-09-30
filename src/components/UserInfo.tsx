import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";

type PropsType = {
  userInfo: {
    imageUrl: string | undefined;
    name: string | null | undefined;
    id: string | undefined;
  };
};

const UserInfo = (props: PropsType) => {
  const { userInfo } = props;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full">
          <Avatar>
            <AvatarFallback>
              {userInfo.imageUrl && (
                <Image
                  src={userInfo.imageUrl}
                  alt={userInfo.name || ""}
                  width={32}
                  height={32}
                  className="rounded-full cursor-pointer"
                />
              )}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>アカウント情報</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="h-4 w-4" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-4 w-4" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive w-full" asChild>
            <SignOutButton>
              <button
                type="button"
                className="w-full flex items-center justify-start gap-2 cursor-pointer"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserInfo;
