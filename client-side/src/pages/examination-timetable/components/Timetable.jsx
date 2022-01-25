import React from 'react'
import { useSelector } from 'react-redux'

const Timetable = () => {
   
    const { examinationTimetable } = useSelector( state => state )

    return (
        <table className='table table-striped table-hover'>
            <thead>
                <tr> 
                    <th> S/N </th>
                    <th> Subject </th>
                    <th> Day </th>
                    <th> Time </th>
                    <th> Date </th>
                    <th> Venue </th>
                 </tr>
            </thead>
            <tbody>
                {
                    examinationTimetable.map( exam => {
                        return(
                            <tr key={exam.id}>
                                 <td> { exam.id}  </td>
                                 <td> { exam.subject } </td>
                                 <td> { exam.day } </td>
                                 <td> { exam.time } </td>
                                 <td> { exam.date } </td>
                                 <td> {exam.venue } </td>
                            </tr>
                        )
                    } )
                }
            </tbody>
        </table>
    )
}

export default Timetable
