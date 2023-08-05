import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

export default function Link({ to, children }) {
    const { navigate } = useNavigation();

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return;

        event.preventDefault();
        navigate(to);
    }

    const classes = classNames("text-blue-500")

    return <a href={to} onClick={handleClick} className={classes}>{children}</a>
}