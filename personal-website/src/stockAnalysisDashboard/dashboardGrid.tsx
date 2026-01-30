import { useEffect } from 'react'
import 'gridstack/gridstack.main.css'
import { GridStack } from 'gridstack'
import { DashboardGridContent } from './stockAnalysisDashboard'
import NumberStat from './numberStat'
import lineChartContent from './lineChartContent'
import NewsList from './newsLinks'

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
                {/* Second Row */}
                <div className='grid-stack-item' gs-w="10" gs-h="3">
                    <DashboardGridContent className="grid-stack-item-content">
                        <lineChartContent>
                            priceHistory{stockData.priceHistory}
                        </lineChartContent>
                    </DashboardGridContent>
                </div>
                <div className='grid-stack-item' gs-w="2" gs-h="2">
                    <DashboardGridContent className="grid-stack-item-content">
                        <div style={{marginBottom: '10px'}}>Future Earnings</div>
                            {stockData.futureEarningsDates.map((nextDate: string) => {
                                <div>{nextDate}</div>
                            })}  
                    </DashboardGridContent>
                </div>
                {/* Third Row */}
                <div className='grid-stack-item' gs-w="5" gs-h="2">
                    <DashboardGridContent className="grid-stack-item-content">
                        <NewsList
                            newsLink={stockData.newsArticles}
                        ></NewsList>
                    </DashboardGridContent>
                </div>
            </div>
        </div>
    )
}

export default DashboardGrid
