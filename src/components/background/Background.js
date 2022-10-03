import {Wrapper, BackgroundImage} from "./BackgroundStyle"
import background from "../../assets/background.jpg"


const Background = ({children}) => {
  return (
    <Wrapper>
        <BackgroundImage src={background} alt="background image" />
        {children}
    </Wrapper>
  );
}

export default Background;
