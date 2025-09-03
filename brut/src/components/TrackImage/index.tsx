import { Box, Image } from "./styles"
import type { ITrack } from "../../types"

interface IProps {
    track: ITrack | null
}

const TrackImage:React.FC<IProps> = ( {track} ) => {


    if (!track || !track.image) {
        console.log("Pas d'image à afficher", track);
        return <Box />
    }


    return (
        <>
            <Box>
                <Image image={track.image}/>
            </Box>

        </>
    )
}

export default TrackImage