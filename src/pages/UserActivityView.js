import Layout from "../components/parent/Layout"
// import { useParams } from "react-router-dom"
import { useState} from "react"

import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import UserActivityDetail from "../containers/UserActivityDetail"


function UserActivityView() {
  const [ startDateTimeValue, setStartDateTimeValue ] = useState(false)
  const [ endDateTimeValue, setEndDateTimeValue ] = useState(false)
//   const { userID } = useParams()

    const onStartChange = (newValue) => {
        setStartDateTimeValue(newValue.toISOString())
    }

    const onEndChange = (newValue) => {
        setEndDateTimeValue(newValue.toISOString())
    }

    console.log(startDateTimeValue, endDateTimeValue)
  return (
    <Layout>
        {!(startDateTimeValue && endDateTimeValue) 
        ?        
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Pick Interval Start Time" onChange={(newValue) => onEndChange(newValue)} />
                </DemoContainer>

                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Pick Interval End Time" onChange={(newValue) => onStartChange(newValue)} />
                </DemoContainer>
            </LocalizationProvider>
        </>
        :
        <UserActivityDetail/>
        }


        {/* {onSubmit()} */}
    </Layout>
  )
}

export default UserActivityView