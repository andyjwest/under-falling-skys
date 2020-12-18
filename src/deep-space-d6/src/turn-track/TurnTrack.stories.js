import React, {useState} from 'react';

import TurnTrack from './TurnTrack';
import {PhaseContext} from "../phase-context";
import {rollCrewDice} from "../Cards/data";

export default {
  title: 'TurnTrack',
  component: TurnTrack,
  argTypes: {},
};

const Wrapper = (props)=> {
  const [phase, setPhase] = useState(props.phase)

  return <PhaseContext.Provider value={{
    phase: phase,
    nextPhase: ()=>{
      if(phase > 1){
        setPhase(0)
      } else {
        setPhase(phase + 1)
      }
    }
  }}>
    <TurnTrack {...props.props}/>
  </PhaseContext.Provider>
}


const Template = (args) => <Wrapper {...args} />;

export const Crew = Template.bind({});
Crew.args = {
  phase: 0,
  props: {
    crew: rollCrewDice(5)
  }
};

export const Assign = Template.bind({});
Assign.args = {
  context: {
    phase: 'assign'
  },
  props: {
    crew: rollCrewDice(5)
  }
};
