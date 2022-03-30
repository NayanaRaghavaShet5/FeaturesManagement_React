import React, { useState } from 'react';
import { Typography, Grid, Box, Switch } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AuditManagement from './AuditManagement';
import FeaturesManagementStyles from './FeaturesManagementStyles';

const makeComponentStyles = makeStyles(FeaturesManagementStyles);

const FeaturesManagement = () => {

    const classes = makeComponentStyles();
    const [caseManagement, setCaseManagement] = useState(true);
    const [timeLine, setTimeLine] = useState(true);
    const [views, setViews] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [massComm, setMassComm] = useState(true);
    const [trafficCam, setTrafficCam] = useState(true);

    return (
        <div className="container">
            {console.log('case', caseManagement)}
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography className="header" variant="h5" gutterBottom component="div">
                        GENERAL
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                CASE MANAGEMENT
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={caseManagement} onChange={() => setCaseManagement(!caseManagement)} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                MAP TIMELINE
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={timeLine} onChange={() => setTimeLine(!timeLine)} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                VIEWS & BRIEFINGS
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={views} onChange={() => setViews(!views)} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                NOTIFICATIONS
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={notifications} onChange={() => setNotifications(!notifications)} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                MASS COMMUNICATIONS
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={massComm} onChange={() => setMassComm(!massComm)} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="featuresContainer">
                        <div className="innerDiv">
                            <div className="iconDiv"></div>
                            <Typography className="subtext" gutterBottom component="div">
                                TRAFFIC CAMERAS
                            </Typography>
                        </div>
                        <Switch className={classes.switch} defaultChecked value={trafficCam} onChange={() => setTrafficCam(!trafficCam)} />
                    </div>
                </Grid>
            </Grid>
            <AuditManagement />
        </div>
    )
}

export default FeaturesManagement;