import TopBottomContainer from "./TopBottomContainer";
import MiddleContainer from "./MiddleContainer";

const Container = () => {
    return (
    <div className="container">
        <TopBottomContainer></TopBottomContainer>
        <MiddleContainer></MiddleContainer>
        <TopBottomContainer></TopBottomContainer>
    </div>
 );
}

export default Container;