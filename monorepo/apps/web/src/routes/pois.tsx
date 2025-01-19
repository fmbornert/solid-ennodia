import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import { getPoIs } from "~/lib/db-access";

export const route = {
    load: () => getPoIs()
}

export default function PoIs() {
    const pois = createAsync<string | null>(()=>getPoIs());

    createEffect(()=>{
        if(pois===null){
            throw new Error("404");
        }
    });

    return (
        <main>
            <Title>All PoIs displayed here</Title>
            <Show when={pois()}>
                {
                    <p>{pois()} arrived</p>
                }
            </Show>
        </main>
    );
}