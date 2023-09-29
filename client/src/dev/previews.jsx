import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import UserItem from "../components/UserItem";
import LeaderBoard from "../components/LeaderBoard";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/UserItem">
                <UserItem/>
            </ComponentPreview>
            <ComponentPreview path="/LeaderBoard">
                <LeaderBoard/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews