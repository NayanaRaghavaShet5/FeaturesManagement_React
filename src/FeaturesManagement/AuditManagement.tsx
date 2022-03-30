import React, { useState } from 'react';
import {
    Typography, Grid, Switch, Divider, MenuItem, FormControl, Select, InputBase,
    ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AuditManagementStyles from './AuditManagementStyles';
import Checkbox from '@mui/material/Checkbox';

const makeComponentStyles = makeStyles(AuditManagementStyles);
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const userArray = ['USERS ADD', 'USER DELETE', 'USERS EDIT', 'MAX USERS'];

const ITEM_HEIGHT = 65;
const ITEM_PADDING_TOP = 8;

const AuditManagement = () => {
    const classes = makeComponentStyles();
    const [audit, setAudit] = useState(true);
    const [users, setUsers] = useState(true);
    const [alertManager, setAlertManager] = useState(true);
    const [alertRules, setAlertRules] = useState(true);
    const [userSelect, setUserSelect] = useState(true);
    const [userAdd, setUserAdd] = useState(true);
    const [userDelete, setUserDelete] = useState(true);
    const [userEdit, setUserEdit] = useState(true);
    const [maxUsers, setMaxusers] = useState(true);
    const [usersCount, setUsersCount] = useState(10);

    const handleAlertRules = () => {
        setAlertRules(!alertRules);
    }

    const handleChange = (event:any) => {
        setUsersCount(event.target.value)
    }

    const handleUser = (event: any) => {
        setUserSelect(!userSelect)
    }

    const handleUserSwitch = () => {
        setUsers(!users);
    }

    const BootstrapInput = styled(InputBase)(({ }) => ({
        'label + &': {
            marginTop: '4px',
        },
        '& .MuiInputBase-input': {
            //borderRadius: 4,
            position: 'relative',
            backgroundColor: '',
            fontSize: 16,
            width: 20,
            padding: '10px 26px 10px 12px',
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
        '& .MuiSelect-select': {
            minWidth: '22px !important'
        },
        '& .MuiSelect-icon': {
            color: '#fff'
        },
        '& .MuiSelect-icon.Mui-disabled': {
            color: '#696969'
        }
    }));

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 270,
                background: '#0d1117',
                color: '#fff'
            },
        },
    };

    return (
        <div className="alertsDiv">
            {console.log('users', userAdd)}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className="header" variant="h6" gutterBottom component="div">
                        SETTINGS
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <div className="settingsContainer">
                        <div className="settingsDiv">
                            <div className="innerDiv">
                                <div className="iconDiv"></div>
                                <Typography className="subtext" gutterBottom component="div">
                                    AUDIT LOG
                                </Typography>
                            </div>
                            <Switch className={classes.switch} defaultChecked value={audit} onChange={() => setAudit(!audit)} />
                        </div>
                        <Divider style={{ background: '#fff' }} />
                        <div className="usersDiv">
                            <div className="innerDiv">
                                <div className="iconDiv"></div>
                                <Typography className="subtext" gutterBottom component="div">
                                    USERS
                                </Typography>
                            </div>
                            <Switch size="medium" className={classes.switch} value={users} defaultChecked onChange={handleUserSwitch} />
                            <FormControl key={1} disabled={!users} sx={{ m: 1 }} variant="standard">
                                <Select
                                    open={userSelect}
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={'ten'}
                                    onOpen={() => setUserSelect(!userSelect)}
                                    onClose={() => setUserSelect(false)}
                                    onChange={handleUser}
                                    MenuProps={MenuProps}
                                    input={<BootstrapInput />}
                                >
                                    <MenuItem value={10}>
                                        <ListItemText primary={"USERS ADD"} />
                                        <Switch size="medium" className={classes.switch} checked={userAdd} onChange={() => setUserAdd(!userAdd)} />
                                    </MenuItem>
                                    <MenuItem value={10}>
                                        <ListItemText primary={"USER DELETE"} />
                                        <Switch size="medium" className={classes.switch} checked={userDelete} onChange={() => setUserDelete(!userDelete)} />
                                    </MenuItem>
                                    <MenuItem value={10}>
                                        <ListItemText primary={"USERS EDIT"} />
                                        <Switch size="medium" className={classes.switch} checked={userEdit} onChange={() => setUserEdit(!userAdd)} />
                                    </MenuItem>
                                    <MenuItem value={10}>
                                        <ListItemText primary={"MAX USERS"} />
                                        <Switch size="medium" className={classes.switch} checked={maxUsers} onChange={() => setMaxusers(!maxUsers)} />
                                        <FormControl disabled={!maxUsers} sx={{ m: 1 }} variant="standard">
                                            <Select
                                                className={classes.select}
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={usersCount}
                                                onChange={handleChange}
                                                input={<BootstrapInput />}
                                            >
                                                {numbersArray.map((item: any) => {
                                                    return <MenuItem value={item}>{item}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className="header" variant="h5" gutterBottom component="div">
                        ALERTS
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <div className="settingsContainer">
                        <div className="settingsDiv">
                            <div className="innerDiv">
                                <div className="iconDiv"></div>
                                <Typography className="subtext" gutterBottom component="div">
                                    ALERT MANAGER
                                </Typography>
                            </div>
                            <Switch size="medium" className={classes.switch} defaultChecked onChange={() => setAlertManager(!alertManager)} />
                        </div>
                        <div className="usersDiv">
                            <div className="innerDiv">
                                <div className="iconDiv"></div>
                                <Typography className="subtext" gutterBottom component="div">
                                    ALERT RULES
                                </Typography>
                            </div>
                            <FormControl disabled={!alertRules} sx={{ m: 1 }} variant="standard">
                                <Select
                                    className={classes.select}
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={usersCount}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                >
                                    {numbersArray.map((item: any) => {
                                        return <MenuItem value={item}>{item}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Switch size="medium" className={classes.switch} defaultChecked onChange={handleAlertRules} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AuditManagement;