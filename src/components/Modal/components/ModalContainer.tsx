import { usePathname } from 'next/navigation';
import { type PropsWithChildren, useCallback, useEffect, useRef } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { PORTAL_ID } from '@constants/portal';
import { useModalStore } from '@stores/modal';

import Portal from '../../Portal';
import * as styles from '../style.css';

type ModalSizeType = 'login' | 'common';

interface ModalContainerProps {
  type?: ModalSizeType;
}

const ModalContainer = ({
  children,
  type = 'common',
}: PropsWithChildren<ModalContainerProps>) => {
  const dimmedRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const { closeModal } = useModalStore();

  const handleDimmedClick = useCallback(
    (e: MouseEvent) => {
      const isDimmedClick = dimmedRef.current && e.target === dimmedRef.current;
      isDimmedClick && closeModal();
    },
    [closeModal],
  );

  const handleEscKeydown = useCallback(
    (event: KeyboardEvent) => {
      event.key === 'Escape' && closeModal();
    },
    [closeModal],
  );

  useEffect(() => {
    const dimmedRefCurr = dimmedRef.current;

    dimmedRefCurr?.addEventListener('click', handleDimmedClick);
    dimmedRefCurr?.addEventListener('keydown', handleEscKeydown);

    return () => {
      dimmedRefCurr?.removeEventListener('click', handleDimmedClick);
      dimmedRefCurr?.removeEventListener('keydown', handleEscKeydown);
    };
  }, [handleDimmedClick, handleEscKeydown]);

  useEffect(() => closeModal, [closeModal, pathname]);

  const closeIconSize = type === 'login' ? 32 : 24;

  return (
    <Portal id={PORTAL_ID.MODAL}>
      <div className={styles.dimmed} ref={dimmedRef} />
      <div className={styles.modalStyle({ type })}>
        <Button className={styles.closeButton} onClick={closeModal}>
          <Icon icon="close" width={closeIconSize} height={closeIconSize} />
        </Button>
        {children}
      </div>
    </Portal>
  );
};

export default ModalContainer;
