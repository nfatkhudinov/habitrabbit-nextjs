import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const Info = () => {
    return (
        <Card sx={{ maxWidth: 330 }} variant="outlined">
            <CardContent>
                <Typography variant={'body1'}>
                    Для формирования новой привычки требуется от 18 до 254 дней. А чтобы привычка стала автоматической, требуется в среднем 66 дней. Получается, что в среднем человеку нужно быть терпеливым и целеустремленным не меньше трех месяцев.
                </Typography>
                <Typography variant={'h5'}>
                    HabitRabbit - веб-приложение, которое поможет Вам сформировать привычку или избавиться от неё.</Typography>
            </CardContent>
        </Card>
    );
};

export default Info;