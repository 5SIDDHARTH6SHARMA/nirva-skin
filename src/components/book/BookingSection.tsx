import BookingForm from "./BookingForm";
import ContactCard from "./ContactCard";
import styles from "./BookingSection.module.css";

export default function BookingSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <BookingForm />
        <ContactCard />
      </div>
    </section>
  );
}
