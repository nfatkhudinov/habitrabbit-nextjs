import React from 'react';
import {Props} from './layout.types'
import * as S from './layout.styled'

const Layout:React.FC<Props> = (props) => {
    const {
        children
    } = props

    return (
        <S.Container>
            {children}
        </S.Container>
    );
};

export default Layout;