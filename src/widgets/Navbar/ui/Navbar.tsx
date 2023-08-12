import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import i18next from 'i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                {i18next.t('Главная')}
            </AppLink>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <AppLink theme={AppLinkTheme.RED} to="/about">
                {i18next.t('О сайте')}
            </AppLink>
        </div>
    </div>
);
