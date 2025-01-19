import { HttpStatusCode } from "@solidjs/start"

type ErrorProps = {
    code: "404"
}

export default function ErrorComponent(props: ErrorProps){
    return (
        <main>
            <HttpStatusCode code={Number(props)}/>
            <p>There is an issue.</p>
        </main>
    );
}