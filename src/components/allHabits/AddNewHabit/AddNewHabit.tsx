import React, {useEffect, useState} from 'react';
import * as S from './addNewHabit.styled'
import {Button, Input} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers-pro";
import moment from "moment";
import dayjs from "dayjs";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
const AddNewHabit = () => {
    const axiosAuth = useAxiosAuth()
    const [pickedDate, setPickedDate] = useState(dayjs())
    const [taskName, setTaskName] = useState('')
    const [error, setError] = useState(true)
    const showErrorDate=()=>{
        if (dayjs().diff(pickedDate)>=0) {
            return <div>Выбрана неправильная дата</div>
        } else {
            return <div>Дней на выполнение задачи: {pickedDate.diff(dayjs().subtract(1,'day'), 'day')}</div>
        }
    }

    useEffect(()=>{
        if (dayjs().diff(pickedDate)>=0){
            setError(true)
        } else setError(false)
    }, [pickedDate])

    const submitHandler = async () => {
        try{
                const res = await axiosAuth.post('api/habit/makeNewHabit', {
                name: taskName,
                startDate: dayjs().format('DD.MM.YYYY'),
                expDate: pickedDate.format('DD.MM.YYYY'),
                taskLength: pickedDate.diff(dayjs().subtract(1,'day'), 'day'),
            })
            console.log(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <S.Container>
            Введите название задачи: <Input
            fullWidth={true}
            size={"small"}
            placeholder={'Название задачи'}
            value={taskName}
            // @ts-ignore
            onChange={(e)=>setTaskName(e.target.value)}
        />

            Выберите дату окончания: <DatePicker
            label="Дата окончания"
            value={pickedDate}
            minDate={dayjs().add(1,'day')}
            maxDate={dayjs().add(180, 'day')}
            // @ts-ignore
            onChange={(e)=>setPickedDate(e)}
        />

            {showErrorDate()}
            <Button onClick={submitHandler} fullWidth={true} disabled={error} variant={"contained"}>Создать задачу</Button>
        </S.Container>
    );
};

export default AddNewHabit;