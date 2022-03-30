const AuditManagementStyles = (theme: any) => ({
    switch: {
        '& .Mui-checked': {
            color: '#fff !important',
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: '#696969 !important',
            opacity: 1,
        },
        '& .Mui-checked+.MuiSwitch-track': {
            backgroundColor: '#007FFF !important'
        },
       
    },
    select : {
        '& .MuiInputBase-root':{
            minWidth: '20px'
        },
        '& .MuiSelect-select':{
            color:'#fff'
        }
    }
});

export default AuditManagementStyles;