import { Button, Checkbox} from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import React from 'react'
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const Main = () => {

    

  

    return (
        <div>
            <Checkbox></Checkbox>
           <Button
           startIcon={<AccessAlarmIcon />}
            style={btn} color="primary" variant="contained" size="large">Bgehee</Button>
        </div>
    )
}

export default Main


const btn: CSSProperties = {
    color: 'white',
    width: '15rem',
    height: '3rem',
}