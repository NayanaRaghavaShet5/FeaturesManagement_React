const FeaturesManagementStyles = (theme : any) => ({
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
        }
    }
})

export default FeaturesManagementStyles;