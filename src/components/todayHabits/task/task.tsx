import React, {useState} from 'react';
import * as S from './task.styled'
import {Props} from './task.types'
import {DatesContainer, ProgressBar, ProgressContainer, TaskMark, TaskName, TaskNameContainer} from "./task.styled";
import dayjs from "dayjs";
import {date} from "zod";
import {unstable_setRef} from "@mui/utils";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {loadHabits} from "@/redux/actions";
const customParseFormat = require('dayjs/plugin/customParseFormat');
const Task:React.FC<Props> = (props) => {
    const {
        name, isCompleted, expDate, startDate, taskLength, habitId, daysArray, flag
    } = props

    const axiosAuth = useAxiosAuth()

    const completePercents = () =>{
        dayjs.extend(customParseFormat)
        const date1 = dayjs(startDate, 'DD.MM.YYYY')
        const date2 = dayjs(expDate, 'DD.MM.YYYY')
        const today = dayjs()
        const diff1 = Math.abs(today.diff(date1))
        const diff2 = Math.abs(today.diff(date2))
        console.log('PERCENT', ((diff1*100)/(diff1+diff2)))
        return ((diff1*100)/(diff1+diff2))
    }
    const dispatch = useDispatch()
    const setTodayCompleted = async () =>{
        console.log('Trying to set as completed')
        try{
            const res1 = await axiosAuth.post('/api/habit/setTodayCompleted', {
                id: habitId
            })
            const res = await axiosAuth.post('/api/habit/getActiveHabits')
            dispatch(loadHabits(res.data.tasks))

        }
        catch (e) {
            console.log(e)
        }
    }

    const iconGenerator = () => {
        if (flag) {
            console.log('Got flag!')
            return <S.SuccessIcon/>
        }
        else return <S.AlertIcon/>
    }

    return (
        <S.Container>
            {iconGenerator()}
            <TaskNameContainer>
                <TaskName>{name}</TaskName>
                <TaskMark>Пометить как выполненное</TaskMark>
            </TaskNameContainer>
            <ProgressContainer>
                <DatesContainer>
                    <S.Dates>{startDate}</S.Dates>
                    <S.Dates>{expDate}</S.Dates>
                </DatesContainer>
                <ProgressBar>
                    <S.Progress percent = {completePercents()}/>
                </ProgressBar>
            </ProgressContainer>
            <Button onClick={setTodayCompleted}>TEST</Button>
        </S.Container>
    );
};

export default Task;