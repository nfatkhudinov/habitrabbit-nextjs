import React from 'react';
import * as S from './habit.styled'
import {Props} from './habit.types'
import {Button} from "@mui/material";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {useDispatch} from "react-redux";
import {loadHabits} from "@/redux/actions";
const Habit:React.FC<Props> = (props) => {
    const {
        name, isCompleted, expDate, startDate, taskLength, habitId, daysArray,
    } = props
    const dispatch = useDispatch()
    const axiosAuth = useAxiosAuth()

    //S.Dot S.DotCompleted
    const dotGenerator = () =>{       //TODO ПЕРЕДЕЛАТЬ!
        //@ts-ignore
        return daysArray.map(i=>{
            if (i?.completed) return <S.DotCompleted/>
            else return <S.Dot/>
        })
    }

    const deleteHabit = async () =>{
        try {
            console.log('HABIT_ID',habitId)
            const res = await axiosAuth.post('/api/habit/deleteHabit', {
                id: habitId,
            }).then(async () => {
                try {
                    const res = await axiosAuth.post('/api/habit/getActiveHabits')
                    dispatch(loadHabits(res.data.tasks))
                } catch (e) {
                    console.log(e)
                }
            })

            console.log(res)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <S.Container>
            <S.habitIdStyle>{habitId}</S.habitIdStyle>
            <S.HeaderContainer>
            <S.Header>{name}</S.Header>

                <S.Settings/><Button onClick={deleteHabit}>Удалить задачу</Button>
            </S.HeaderContainer>
            <S.LengthContainer>
                <S.StartDateContainer>{startDate}</S.StartDateContainer>
                <S.DatesContainer>
                    {dotGenerator()}
                </S.DatesContainer>
                <S.EndDateContainer>{expDate}</S.EndDateContainer>
            </S.LengthContainer>
        </S.Container>
    );
};

export default Habit;