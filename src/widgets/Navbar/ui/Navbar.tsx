import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line max-len */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, nihil voluptas? Ab eum molestiae natus nisi quis. Aliquid facere labore magni nesciunt non possimus provident ratione reiciendis. Accusantium autem eveniet itaque maxime neque nobis odit optio qui quidem voluptate. Cum dicta eius esse exercitationem impedit incidunt magni nemo nesciunt quae tenetur? Aspernatur est nisi nulla praesentium temporibus? Amet asperiores cumque dicta distinctio eveniet facilis inventore pariatur sed tenetur? Architecto consequuntur deleniti dolor doloribus dolorum, ducimus eligendi, error et illo incidunt ipsa iste itaque laborum nemo, officiis omnis pariatur perspiciatis placeat quaerat quis reprehenderit sequi sint suscipit unde vero! Iure, repudiandae.')}
            </Modal>
        </div>
    );
};
