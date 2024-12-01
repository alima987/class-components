import { ChangeEvent} from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { setLanguage } from "../../redux/slices/languageSlice";

const Languages = () => {
    const dispatch = useDispatch()
    const language = useSelector((state: RootState) => state.language.language);
    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setLanguage(e.target.value))
    }
  return (
    <div>
        <select value={language} onChange={handleLanguageChange}>
            <option value='en-US'>EN</option>
            <option value='es-ES'>ES</option>
            <option value='ru-RU'>RU</option>
        </select>
    </div>
  )
}
export default Languages