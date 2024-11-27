import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Result(props) {

    const url = props.url;

    return (
        <Card sx={{ maxWidth: 1000, marginBottom: 2, backgroundColor: "#e3e3e3 "}}>
            <CardActionArea onClick={
                () => {
                window.open(url, '_blank')
                }}
            >
                <CardContent>
                    <Typography noWrap variant="p" component="div">
                        {url}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}