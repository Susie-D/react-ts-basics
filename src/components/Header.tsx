import { ReactNode } from "react";

interface Props {
    image: {
        src: string; 
        alt: string;
    }
    children: ReactNode;
}


const Header = ({
    image,
    children,
}: Props) => {
    return (
        <header>
            <img {...image}/>
            {children}
        </header>
    )
}


export default Header;