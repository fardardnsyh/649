import logo from "@/assets/Avatar.png"
import Image from "next/image";

const Follow = () => {
    return (
        <a href="https://www.youtube.com/channel/UCQvgyU3GveQJNcMDuL6L9Gg" 
        target="_blank"
        rel="noreferrer noopener"
        style={{
            textDecoration: "none", 
            display: "flex", 
            alignItems: "center", 
            gap: ".5rem",
            marginBottom: "1rem"
        }}>
            <Image 
                src={logo}
                alt="Profile logo"
                width={35}
                height={35}
                style={{ borderRadius: "50%" }}
            />
            <div>
                <h2 style={{color: "#0080FE", fontSize: "1rem"}}>Contawo</h2>
                <p style={{color: "grey", fontSize: ".7rem"}}>Subscribe to my channel</p>
            </div>
        </a>
    )
}

export default Follow;