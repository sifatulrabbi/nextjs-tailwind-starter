import type {NextPage, NextPageContext} from "next";
import {Head} from "../components";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({message}) => {
    return (
        <>
            <Head title={"Home"} />
            <h1 className="text-2xl font-bold text-center">{message}</h1>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: {message: "Next.js starter with TailwindCSS"},
    };
}

export default Home;
