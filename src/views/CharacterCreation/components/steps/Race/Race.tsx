import * as React from 'react';
import { Updater } from 'use-immer';
import { ICharacterGenerationState } from '../../../characterCreation.types';

export interface ICharacterRaceProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: Updater<ICharacterGenerationState>;
}

export default function CharacterRace(props: ICharacterRaceProps) {
  const { characterState, updateCharacterState } = props;
  const { race } = characterState;
  type RaceType = typeof race;
  //  const [raceChoice, setRaceChoice] = useState('');
  const setRaceChoice = (value: RaceType) => {
    updateCharacterState((draft) => {
      draft.race = value;
    });
  };

  return (
    <div>
      <div className="content">
        <h4>Select a Race.</h4>
      </div>
      <div className="radio-toolbar select-race content">
        <div>
          <input
            type="radio"
            name="race"
            id="select-race-human"
            value="Human"
            onChange={(e) => setRaceChoice('Human')}
          />
          <label htmlFor="select-race-human">Human</label>
          <input
            type="radio"
            name="race"
            id="select-race-half-elf"
            value="Half-Elf"
            onChange={(e) => setRaceChoice('Half-Elf')}
          />
          <label htmlFor="select-race-half-elf">Half-elf</label>
          <input
            type="radio"
            name="race"
            id="select-race-elf"
            value="Elf"
            onChange={(e) => setRaceChoice('Elf')}
          />
          <label htmlFor="select-race-elf">Elf</label>
          <input
            type="radio"
            name="race"
            id="select-half-orc"
            value="Half-Orc"
            onChange={(e) => setRaceChoice('Half-Orc')}
          />
          <label htmlFor="select-race-half-orc">Half-orc</label>
          <input
            type="radio"
            name="race"
            id="select-race-dwarf"
            value="Dwarf"
            onChange={(e) => setRaceChoice('Dwarf')}
          />
          <label htmlFor="select-race-dwarf">Dwarf</label>
          <input
            type="radio"
            name="race"
            id="select-race-halfling"
            value="Halfling"
            onChange={(e) => setRaceChoice('Halfling')}
          />
          <label htmlFor="select-race-halfling">Halfling</label>
        </div>
      </div>
    </div>
  );
}
