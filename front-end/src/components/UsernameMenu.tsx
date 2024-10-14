import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { DropdownMenuContent,DropdownMenu, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { log } from "console";

const UsernameMenu = () => { 
    const {user, logout} = useAuth0();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-PlusJakartaSans font-bold hover:text-green-500 gap-2">
          <CircleUserRound className="text-green-500" />
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              to="/user-profile"
              className="font-PlusJakartaSans font-bold hover:text-green-500">
              User Profile
            </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button
                        onClick={() =>logout()}
                        className="flex flex-1 font-PlusJakartaSans font-bold bg-green-500">
                        Log Out
                    </Button>
           </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
export default UsernameMenu;