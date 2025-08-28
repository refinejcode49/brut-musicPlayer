import { redirectToAuthCodeFlow } from "../../../auth"
import { Button, H1, Navbar, Profile } from "./styles";


interface IProps {
    profile?: string | null;
}

const Nav:React.FC<IProps> = ({profile}) => {
    const clientId:string = import.meta.env.VITE_CLIENT_ID;


    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId)
    }



    return (
        <>
            <Navbar>
                <H1>Brut</H1>
                {!profile ? (
                    <Button onClick={handleClick}>
                        Login
                    </Button>
                ) : (
                    <Profile
                        src={profile}
                    />
                )}
            </Navbar>
        </>
    )
}

export default Nav