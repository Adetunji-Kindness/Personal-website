import { 
    VerticalAlignContainer, 
    VerticalAlignContent,
    PrimaryColor,
} from './stockAnalysisDashboard'
import styled from 'styled-component' 
import number from 'numabbr'


const NumberDisplay = styled.div`
    color: ${PrimaryColor };
    font-size: 20px;
`

const labelDisplay = styled.div`
    font-weight: bold;
    font-size: 12px;
`

function NumberStat({value, label, center}:{value: number, label: string, center?: boolean}) {
    return (
        <VerticalAlignContainer style={{textAlign: center ? 'center' : 'left' }}>
            <VerticalAlignContent>
                <NumberDisplay>{number{value}}</NumberDisplay>
                <labelDisplay>{label}</labelDisplay>
                <div>{value}</div>
                <div>{label}</div>
            </VerticalAlignContent>
        </VerticalAlignContainer>
    )
}

export default NumberStat
