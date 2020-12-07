import React from "react";
import {
    Button,
    Container, createStyles,
    FormGroup,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField, Theme
} from "@material-ui/core";


export const NewItemForm=()=>{
    const styles = makeStyles((theme:Theme)=>
         createStyles({
            form:{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                flexWrap:'wrap'
            },
             field:{
                margin:'10px 20px'
             },
             unitSelect:{
                minWidth:'100px'
             }
        })

    );
    const classes =styles();
    return (
        <Paper square elevation={3}>
            <Container maxWidth={"md"}>
                <form className={classes.form}>
                    <FormGroup className={classes.field}>
                        <InputLabel>Item</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup className={classes.field}>
                        <InputLabel>Quantity</InputLabel>
                        <TextField/>
                    </FormGroup>
                    <FormGroup className={classes.field}>
                        <InputLabel>Unit</InputLabel>
                        <Select className={classes.unitSelect}>
                            <MenuItem value={"g"}>grams</MenuItem>
                            <MenuItem value={"kg"}>kilograms</MenuItem>
                            <MenuItem value={"item"}>item(s)</MenuItem>
                        </Select>

                    </FormGroup>
                    <Button variant="contained" color="primary">Add</Button>
                </form>
            </Container>
        </Paper>

    );
}