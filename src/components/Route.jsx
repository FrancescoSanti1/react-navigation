import useNavigation from "../hooks/useNavigation";

export default function Route({ path, children }) {
    const { currentPath } = useNavigation();

    return path == currentPath ? children : null;
}