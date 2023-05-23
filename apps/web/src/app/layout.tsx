import { FC, ReactNode } from "react";

export interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default Layout;
