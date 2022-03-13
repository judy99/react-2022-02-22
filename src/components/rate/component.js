import YellowStar from "../../icons/star-symbol-yellow.svg"
import GreyStar from "../../icons/star-symbol-grey.svg"
import styles from "./style.module.css";

export const Rate = ({ rate }) => {
    const MAXRATE = 5;
    const rateArray = Array.from({length: MAXRATE}, (item, index) => index < rate ? 1 : 0)
    return <div>
         {
            rateArray.map((item, index) => {
                return (
                    // the order of items never changes, so that index can be used as a key
                    <img key={index} src={item ? YellowStar : GreyStar} alt="rating" className={styles.rate}/>
                )
            })
        }   
    </div>
}