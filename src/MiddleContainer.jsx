import BigBox from "./BigBox";
import SmallBox from "./SmallBox";

const MiddleContainer = () => {
    return(
        <div className="middle-container">
            <SmallBox></SmallBox>
            <BigBox></BigBox>
        </div>
    );
}

export default MiddleContainer