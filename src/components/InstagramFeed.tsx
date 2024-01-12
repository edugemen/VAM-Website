import React, { useEffect } from "react";
import "./InstagramFeed.css";

function InstagramFeed(props) {
    const [feed, setFeed] = React.useState([]);

    async function fetchInstagram() {
        let res = await fetch("https://eduflix.pro/ig-collection");

        let data = await res.json();

        setFeed(data);
    }

    useEffect(() => {
        fetchInstagram();
    }, []);

    if (feed) {
        return (
            <div className="ig-container">
                <h2>Últimas publicaciones</h2>
                <div className="ig-feed">
                    {feed.map((media) => (
                        <div
                            className="ig-card"
                            key={media._id}
                            onClick={() => window.open("posts/" + media._id)}
                        >
                            <img
                                className="ig-photo"
                                alt={
                                    "post " +
                                    new Date(
                                        media.timestamp
                                    ).toLocaleDateString("es-ES")
                                }
                                loading="lazy"
                                src={
                                    "https://eduflix.pro/" + media.thumbnail_url
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <p>Loading...</p>;
    }
}

export default InstagramFeed;
