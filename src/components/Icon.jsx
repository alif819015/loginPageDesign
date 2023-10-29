import { IconStyle } from "./style/Icon.style";

const Icon = ({ color, children }) => {
    return (
        <IconStyle background={color}>{children}</IconStyle>
    );
};

export default Icon;