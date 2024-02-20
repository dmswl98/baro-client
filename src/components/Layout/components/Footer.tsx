import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';
import { useModalStore } from '@stores/modal';

import * as styles from '../style.css';

const Footer = () => {
  const pathname = usePathname();
  const { openModal } = useModalStore();

  const handleLoginButtonClick = () => openModal('login');

  return (
    <footer className={styles.footerWrapper}>
      <div>
        <div>
          <Link href="mailto:help@ba-ro.co.kr" className={styles.footerButton}>
            서비스메일
          </Link>
          <Link href={ROUTES.USE} className={styles.footerLink}>
            이용약관
          </Link>
          <Link href={ROUTES.PRIVACY} className={styles.footerLink}>
            개인정보보호방침
          </Link>
        </div>
        <Link
          href="https://www.instagram.com/ba_ro.official"
          target="_blank"
          className={styles.instagramLink}
        >
          <div className={styles.instagramIcon}>
            <Icon icon="instagram" />
          </div>
          <span className={styles.instagramText}>인스타그램</span>
        </Link>
      </div>
      {pathname === '/' && (
        <Button
          className={styles.footerStartButton}
          onClick={handleLoginButtonClick}
        >
          바로 시작하기
        </Button>
      )}
      <div>
        <div className={styles.baroIcon}>
          <Icon icon="logo32" width={32} height={36} />
        </div>
        <span className={styles.copyright}>
          &copy;2024. Baro All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
