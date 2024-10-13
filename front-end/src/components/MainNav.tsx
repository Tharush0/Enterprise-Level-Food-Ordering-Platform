import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
    return (
      <Button
        variant="ghost"
        className="font-PlusJakartaSans font-bold bg-green-500 text-white hover:bg-green-400"
        onClick={async () => await loginWithRedirect()}      
      >
        Log In
      </Button>
    );
}
export default MainNav;