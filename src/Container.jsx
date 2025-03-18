import BigBox from "./BigBox";
import SmallBox from "./SmallBox";

const Container = () => {
    return (
    <div className="container">
        <BigBox></BigBox>
        <SmallBox></SmallBox>
        <SmallBox></SmallBox>
        <BigBox></BigBox>
        <BigBox></BigBox>
        <SmallBox></SmallBox>
    </div>
 );
}

export default Container;