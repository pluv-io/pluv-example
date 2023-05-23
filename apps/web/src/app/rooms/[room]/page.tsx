"use client";

import { FC, useState } from "react";
import { usePluvMyPresence, usePluvStorage } from "../../../pluv-io";

const Page: FC = () => {
    const [color, updateMyPresence] = usePluvMyPresence(
        (myPresence) => myPresence.color
    );
    const [messages, sharedType] = usePluvStorage("messages");
    const [message, setMessage] = useState<string>("");

    return (
        <div className="flex flex-col items-stretch">
            <div className="flex items-stretch">
                <input
                    onChange={(event) => {
                        updateMyPresence({
                            color: event.target.value.toLowerCase(),
                        });
                    }}
                    type="color"
                />
                <input
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key !== "Enter") return;

                        sharedType?.push([{ color, message }]);
                    }}
                    type="text"
                    value={message}
                />
                <button
                    onClick={(event) => {
                        sharedType?.push([{ color, message }]);
                    }}
                    type="button"
                >
                    Send
                </button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
                {messages?.map((item, i) => (
                    <div key={i} style={{ color: item.color }}>
                        {item.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
