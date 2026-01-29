import { useEffect } from 'react'
import 'gridstack/gridstack.main.css'
import { GridStack } from 'gridstack'
import { DashboardGridContent } from './stockAnalysisDashboard'
import NumberStat from './numberStat'

function DashboardGrid({stockData}:{stockData: any}) {

    useEffect(() => {
        GridStack.init()
    });
    return (
        <div>
            <div className='grid-stack'>
                {/*First Row*/}
                <div className='grid-stack-item' gs-w='6'>
                    <DashboardGridContent className='grid-stack-item-content'>
                        <NumberStat
                            value={stockData.basicInfo.marketCap}
                            label='Market cap'
                            center={true}
                        ></NumberStat>
                    </DashboardGridContent>
                </div>
                <div className='grid-stack-item' gs-w='6'>
                    <DashboardGridContent className='grid-stack-item-content'>
                        <NumberStat
                            value={stockData.basicInfo.fullTimeEmployees}
                            label='Employees'
                            center={true}
                        ></NumberStat>
                    </DashboardGridContent> 
                </div>
                <div className='grid-stack-item' gs-w='3'>
                    <DashboardGridContent className='grid-stack-item-content'>
                        <NumberStat
                            value={stockData.basicInfo.totalRevenue}
                            label='Total Revenue'
                            center={true}
                        ></NumberStat>
                    </DashboardGridContent>
                </div>
                <div className='grid-stack-item' gs-w='3'>
                    <DashboardGridContent className='grid-stack-item-content'>
                        <NumberStat
                            value={stockData.basicInfo.trailingEPS}
                            label='Earnings Per Share'
                            center={true}
                        ></NumberStat>
                        </DashboardGridContent> 
                </div>
            </div>
        </div>
    )
}

export default DashboardGrid
