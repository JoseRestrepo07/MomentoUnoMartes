import BigBox from "./BigBox";
import SmallBox from "./SmallBox";

const TopBottomContainer = ({position}) => {
    return(
        <div className={`top-bottom-container ${position}`}>
            <BigBox></BigBox>
            <SmallBox></SmallBox>
        </div>
    );
}

export default TopBottomContainer