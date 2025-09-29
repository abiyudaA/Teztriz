import { io } from "socket.io-client";
export const socket = io("https://tetrizz-production.up.railway.app/", {
    autoConnect: false
});


