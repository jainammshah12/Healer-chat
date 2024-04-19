import Link from "next/link";

const End = () => {
    return(
        <div style={{ position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px"}}>
            <h1> Thank you! </h1>
            <div style={{padding: "15px"}}></div>
            <Link href="/">
                <button style={{padding: "6px", position: "absolute", fontFamily: "var(--font-mono)"}}>Return to Home</button>
            </Link>
            
        </div>
    );
};

export default End;