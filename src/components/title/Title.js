import React from 'react';

// import { Container } from './styles';

export default function Title({name, title}) {
 
    return (
        <div>
            <h1> Voce está em:{name}
                <strong>{title}</strong>
            </h1>
        </div>
    );

}
