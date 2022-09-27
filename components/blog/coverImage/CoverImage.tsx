import Image from "next/image";
import { FC, ReactElement } from "react";
import { IAsset } from "../../../graphql/types";

interface Props {
    image: IAsset | null
}
const CoverImage: FC<Props> = ({image}) => {
    if (!image) return <></>
    return <Image alt="" width={image.width} height={image.height} src={image.url}/>
}

export default CoverImage;