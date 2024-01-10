import React, { useEffect } from "react";
import { Partido } from "../utils/Partido";
import "./Marcador.css";

function Marcador(props) {
    const [partido, setPartido] = React.useState<Partido>(null);

    const loadWebsocket = () => {
        const ws = new WebSocket("wss://eduflix.pro");

        ws.onopen = () => {
            console.log("Connected to websocket");
            ws.send(JSON.stringify({ full: true }));
        };

        ws.onmessage = (event) => {
            console.log("DATA:", event.data);
            const data = JSON.parse(event.data);
            //Wait 3 secons idle to avoid flickering
            //setTimeout(() => {
            let partido = new Partido(
                { backgroundColor: data.colors[0] },
                { backgroundColor: data.colors[1] },
                data.names[0],
                data.names[1],
                data.sets[0],
                data.sets[1],
                data.points[0],
                data.points[1],
                data.pointsOrder,
                getServe(data.pointsOrder)
            );

            setPartido(partido);
            //}, 3000);
        };

        ws.onclose = () => {
            console.log("Disconnected from websocket");
        };
    };

    const getServe = (pointsOrder) => {
        let last = pointsOrder[pointsOrder.length - 1];
        if (last.length == 0) {
            return 0;
        }
        return last[last.length - 1] + 1;
    };

    useEffect(() => {
        loadWebsocket();
    }, []);

    if (partido) {
        return (
            <div className="marcador-container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="polygon team-container">
                                    {partido.getTeam1()}
                                </div>
                            </td>
                            <td>
                                <div className="polygon sets-container">
                                    {partido.getSets1()}
                                </div>
                            </td>
                            <td>
                                <div className="polygon game-container">
                                    {partido.getGame1()}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="polygon team-container">
                                    {partido.getTeam2()}
                                </div>
                            </td>
                            <td>
                                <div className="polygon sets-container">
                                    {partido.getSets2()}
                                </div>
                            </td>
                            <td>
                                <div className="polygon game-container">
                                    {partido.getGame2()}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <p>Cargando...</p>;
    }
}

export default Marcador;
