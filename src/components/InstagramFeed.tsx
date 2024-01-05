import React, { useEffect } from "react";
import "./InstagramFeed.css";

const API_KEY = import.meta.env.PUBLIC_INSTAGRAM_KEY;
const VAM_ID = import.meta.env.PUBLIC_VAM_ID;

function InstagramFeed(props) {
    const [feed, setFeed] = React.useState([]);

    async function fetchInstagram() {
        console.log("AAAA", API_KEY, VAM_ID);

        let res = await fetch(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,children{media_url,thumbnail_url}&limit=20&access_token=${API_KEY}`
        );

        let data = await res.json();

        let filteredData = data.data.filter((d) => d.media_type !== "VIDEO");

        setFeed(filteredData);

        console.log(data);
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
                            key={media.id}
                            onClick={() => window.open("posts/" + media.id)}
                        >
                            <img className="ig-photo" src={media.media_url} />
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
