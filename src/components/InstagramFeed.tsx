import React, { useEffect } from "react";

const API_KEY = import.meta.env.PUBLIC_INSTAGRAM_KEY;
const VAM_ID = import.meta.env.PUBLIC_VAM_ID;

function InstagramFeed(props) {
    async function fetchInstagram(account_id: string) {
        console.log("AAAA", API_KEY, VAM_ID);

        let res = await fetch(
            `https://graph.facebook.com/${account_id}/media?fields=media_url&access_token=${API_KEY}`
        );

        let data = await res.json();

        console.log(data);
    }

    useEffect(() => {
        fetchInstagram(VAM_ID);
    }, []);

    return <div></div>;
}

export default InstagramFeed;
