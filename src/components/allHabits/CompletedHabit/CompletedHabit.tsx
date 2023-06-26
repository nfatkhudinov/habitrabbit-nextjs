import React from 'react';
import * as S from './completedHabit.styled'
const CompletedHabit = () => {
    return (
        <S.Container>
                <S.HeaderContainer>
                    <S.Header>Бросить курить</S.Header>
                    <S.CompleteMessage>Задача завершена!</S.CompleteMessage>
                    <S.HorizontalContainer>
                        <S.CompleteMessage>Пройденных дней: 68</S.CompleteMessage>
                        <S.CompleteMessage>Пропущенных дней: 2</S.CompleteMessage>
                    </S.HorizontalContainer>
                </S.HeaderContainer>
        </S.Container>
    );
};

export default CompletedHabit;