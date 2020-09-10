import React from 'react';
import Space from './Space'

export default {
    title: 'Components/Space',
    component: Space
}

const gridStyle = {
    padding: '10px',
    display: 'grid',
    maxWidth: '520px',
    gridTemplateColumns: 'repeat(5, 100px)',
    gridTemplateRows: 'repeat(6, 100px)',
    gridColumnGap: '5px',
    gridRowGap: '5px',
    backgroundColor: '#311603'
}

const GridWrapper = ({children}) => <div style={gridStyle}>{children}</div>

export const Down = () => <GridWrapper><Space type={['down']} /></GridWrapper>
export const Energy = () => <GridWrapper><Space type={['energy']} /></GridWrapper>
export const Research = () => <GridWrapper><Space type={['research']} /></GridWrapper>
export const Robot = () => <GridWrapper><Space type={['robot']} /></GridWrapper>
export const Fighter = () => <GridWrapper><Space type={['fighter']} diceModifier={-1} energyCost={1}/></GridWrapper>

export const FighterWithValue = () => <GridWrapper>
    <Space type={['fighter']} diceModifier={-1} energyCost={1} dieValue={[{value: 3, color:'white'}]}/>
</GridWrapper>

export const AllMod = () => <GridWrapper>
    <Space type={['energy']} diceModifier={-1} />
    <Space type={['research']} diceModifier={-1} />
    <Space type={['robot']} diceModifier={-1} />
    <Space type={['fighter']} diceModifier={-1} />
</GridWrapper>

export const AllModCost = () => <GridWrapper>
    <Space type={['energy']} diceModifier={-1} energyCost={1}/>
    <Space type={['research']} diceModifier={-1} energyCost={1}/>
    <Space type={['robot']} diceModifier={-1} energyCost={1}/>
    <Space type={['fighter']} diceModifier={-1} energyCost={1}/>

    <Space type={['energy']} diceModifier={-1} energyCost={3}/>
    <Space type={['research']} diceModifier={-1} energyCost={3}/>
    <Space type={['robot']} diceModifier={-1} energyCost={3}/>
    <Space type={['fighter']} diceModifier={-1} energyCost={3}/>
</GridWrapper>

export const AllModCost4Unexcavated = () => <GridWrapper>
    <Space type={['energy']} diceModifier={-1} energyCost={1} excavated='true'/>
    <Space type={['research']} diceModifier={-1} energyCost={1} excavated='true'/>
    <Space type={['robot']} diceModifier={-1} energyCost={1} excavated='true'/>
    <Space type={['fighter']} diceModifier={-1} energyCost={1} excavated='true'/>

    <Space type={['energy']} diceModifier={-1} energyCost={3} excavated='true'/>
    <Space type={['research']} diceModifier={-1} energyCost={3} excavated='true'/>
    <Space type={['robot']} diceModifier={-1} energyCost={3} />
    <Space type={['fighter']} diceModifier={-1} energyCost={3} />
</GridWrapper>
