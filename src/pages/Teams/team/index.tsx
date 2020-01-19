import React, {useEffect, useState} from 'react';

export interface TeamProps {
    id: string,
    name: string,
    logo: string
}

export default function Team(props: TeamProps) {
    const {id, name, logo} = props;
    return (
        <div>
            {logo} - {id} - {name}
        </div>
    )
}
