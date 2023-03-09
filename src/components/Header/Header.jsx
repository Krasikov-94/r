import { Form } from '../Form';
import styles from './header.module.css';

export function Header({ addToList }) {
  return (
    <>
      <header className={styles.wrapper}>Header</header>
      <Form addToList={addToList} />
    </>
  );
}
