import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import IconButton from "../components/iconButton/IconButton";
import { fetchSocials } from "../graphql/queries";
import { ISocial } from "../graphql/types";

interface Props {
    socials: ISocial[]
}

export const getStaticProps: GetStaticProps = async () => {

    const socials = await fetchSocials();
    return {
        props: {
            socials
        },
        revalidate: 10
    };
}

const Socials: FC<Props> = ({socials}) => {
    const title = "Coder2195 - Socials"
    const description = "Want to get in contact with Coder2195 or check out his social accounts? Well, come here to check it out!"
    return <div>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description
            }}
        />
        <h1 id="title">Coder2195's Socials</h1>
        <div style={{
            display: "flex",
            width: "100vw",
            justifyContent: "space-evenly"
        }}>
            {socials.map((s)=><IconButton key={s.icon} href={s.url} target={s.target}>{s.icon}</IconButton>)}
        </div>
    </div>
}

export default Socials;