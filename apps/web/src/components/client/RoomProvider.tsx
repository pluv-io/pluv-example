"use client";

import { y } from "@pluv/react";
import { FC, ReactNode } from "react";
import { PluvRoomProvider } from "../../pluv-io";

export interface RoomProviderProps {
    children?: ReactNode;
    initialPresence: {
        color: string;
    };
    room: string;
}

export const RoomProvider: FC<RoomProviderProps> = ({
    children,
    initialPresence,
    room,
}) => {
    return (
        <PluvRoomProvider
            debug
            initialPresence={initialPresence}
            initialStorage={() => ({
                messages: y.array(),
            })}
            room={room}
        >
            {children}
        </PluvRoomProvider>
    );
};
