
import styles from "../styles/styles.module.css";

export default function IndeterminateProgressBar() {
    return (<div class={styles.indeterminateProgressBar}>
                <div class={styles.indeterminateProgressBar__progress}></div>
            </div>);
}