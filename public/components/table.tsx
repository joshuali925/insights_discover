import React from 'react'
import { EuiBasicTable } from '@elastic/eui'

export default function Table() {
  const columns = [
    {
      field: 'time',
      name: 'Time',
      sortable: true,
      width: '250px',
    },
    {
      field: '_source',
      name: '_source',
      sortable: true,
      truncateText: false,
    },
  ];
  
  const items = [
    {
      time: 'May 31, 2020 @ 16:27:00.000',
      _source: 'FlightNum:GDZWNB0 DestCountry:CN OriginWeather:Clear OriginCityName:London AvgTicketPrice:$952.45 DistanceMiles:5,743.838 FlightDelay:false DestWeather:Rain Dest:Shanghai Hongqiao International Airport FlightDelayType:No Delay OriginCountry:GB dayOfWeek:6 DistanceKilometers:9,243.811'
    },
    {
      time: 'May 31, 2020 @ 16:27:00.000',
      _source: 'FlightNum:KUO775Y'
    },
    {
      time: 'May 31, 2020 @ 16:27:00.000',
      _source: 'FlightNum:KUO775Y'
    },
    {
      time: 'May 31, 2020 @ 16:27:00.000',
      _source: 'FlightNum:KUO775Y'
    },
  ]

  return (
    <div>
      <EuiBasicTable
        items={items}
        rowHeader="row header"
        columns={columns}
        // rowProps={getRowProps}
        // cellProps={getCellProps}
      />
    </div>
  )
}
