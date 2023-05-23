import { FC, ReactNode } from "react";
import { RoomProvider } from "../../../components/client";

export interface LayoutProps {
    children?: ReactNode;
    params: {
        room: string;
    };
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
    const { room } = params;

    return (
        <RoomProvider
            initialPresence={{
                color: "#4338ca",
            }}
            room={room}
        >
            {children}
        </RoomProvider>
    );
};

export default Layout;
