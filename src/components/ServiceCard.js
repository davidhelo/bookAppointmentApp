import styles from '../styles/styles.module.css';
import Link from 'next/link';

export default function ServiceCard(props) {
    return (
        <div class="p-card">
            <div class="p-card-header">
                <div>
                    <img class={styles.croppedImg} src="/images/leaves-BG.png" alt="Picture" />
                </div>
            </div>
            <div class="p-card-body">
                <div class="p-card-title">{props.serviceItem.service}</div>
                <div class="p-card-subtitle">{props.serviceItem.summary}</div>
                <div class="p-card-content">
                    <p>{props.serviceItem.details}</p>
                </div>
                <span class="p-tag">
                    $ {props.serviceItem.price}
                </span>
                <div class="p-card-footer">
                    <div>
                        <Link href="/book-appointment" className={styles.pButton}>Agendar cita</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}