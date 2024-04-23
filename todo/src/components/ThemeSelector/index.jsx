
import { useDispatch } from "react-redux";

import { setTheme, invertTheme } from "../../store/themeSlice";

function ThemeSelector() {
    const dispatch = useDispatch();

    function setThemeLight() {
        dispatch(setTheme("light"));
    }

    function setThemeDark() {
        dispatch(setTheme("dark"));
    }

    function handleInvertTheme() {
        dispatch(invertTheme());
    }

    return (
        <div>
        <button onClick={handleInvertTheme}>Invert</button>
        <button onClick={setThemeLight}>Light</button>
        <button onClick={setThemeDark}>Dark</button>
        </div>
    );
}

export default ThemeSelector;