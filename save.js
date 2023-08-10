import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import useDragger from '../../hooks/useDragger'
import CloudProviderAPI from '../../api/CloudProviderAPI'


function ListBox({ top, headerBG, lbox, users }) {
  const userDetail = async(userID) => {
    const now = new Date()
    const tenSecondsAgo = new Date(now.getTime() - 10000)

    return await new CloudProviderAPI().getUserActivityOverTime(
      {
        "interval": `${tenSecondsAgo.toISOString()}/${now.toISOString()}`,
        "granularity": "PT12H",
        "groupBy": [
          "userId"
        ],
        "metrics": [
          "tOrganizationPresence",
          "tAgentRoutingStatus",
          "tSystemPresence"
        ],
        "filter": {
          "type": "or",
          "predicates": [
            {
              "dimension": "userId",
              "value": `${userID}`
            }
          ]
        }
      }
    )
  }

  useDragger(lbox.id)
  const header_rows = Object.entries(lbox.statSelection).map(([key, value]) => (
      <td key={key} className='border-2 border-neutral-500'>{key}</td>
  ))

  return (
    <div
      id={lbox.id}
      style={{
        position: 'absolute',
        // right: 0,
        // left: 0,
        // margin: 'auto',
        // top: '50%',
        width: 'fit-content',
        height: 'fit-content',
        }}
    >
        <table>
          <tbody>
            <tr style={{
                backgroundColor: 'purple',
                border: '2px solid purple',
            }}>
                {header_rows}
            </tr>
            {
              users.length ?
              users[0].users.map(async(user, index) => {
                console.log(user)
                return <div className="div"></div>
                // const user_data = await userDetail(user.id)
                // console.log(user_data)
                // return (
                // <tr key={index} className=''>
                //     <td className='border-2 border-neutral-500'></td>
                //     <td className='border-2 border-neutral-500'>Maria Anders</td>
                //     <td className='border-2 border-neutral-500'>Germany</td>
                // </tr>
                // )
              })
              : console.log('else statement')
            }
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      users: state.users,
  }
}

export default connect(mapStateToProps, {})(
  ListBox
)