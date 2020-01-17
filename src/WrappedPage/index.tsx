import React, {useEffect} from 'react';

interface Props {
    component: any
}

export default function Artists(data: Props) {
    return (
        <div>Games
            {data.component}
        </div>
    )
}
