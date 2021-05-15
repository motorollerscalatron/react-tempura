import React from 'react';
import {
  Abilities,
  Ability,
  AbilityLower,
  AbilityValue,
  BonusAbilityScore,
  ICharacterGenerationState,
} from '../../characterCreation.types';
import styles from './CharacterStats.module.css';
import { calculateHealthPoints } from './helpers/abilities';
import clsx from 'clsx';
import { AbilityPreview } from './components/AbilityPreview';
import { capitalize } from '../../../../helpers';
interface ICharacterStatsProps {
  characterState: ICharacterGenerationState;
}

const withBonusAbilityScore = (
  ability: AbilityLower,
  abilityValue: AbilityValue,
  bonusAbilityScore: BonusAbilityScore
) => {
  if (!bonusAbilityScore.ability || ability !== bonusAbilityScore.ability)
    return abilityValue;

  return {
    value: abilityValue.value + bonusAbilityScore.value,
    mod: abilityValue.mod + bonusAbilityScore.mod,
  };
};

export default function CharacterStats(props: ICharacterStatsProps) {
  const { characterState } = props;
  const { abilities, bonusAbilityScore } = characterState;

  const previewAbilities: [string, AbilityValue][] = Object.entries(
    abilities
  ).map(([ability, abilityValue]) => {
    return [
      capitalize(ability.slice(0, 3)),
      withBonusAbilityScore(
        ability as AbilityLower,
        abilityValue,
        bonusAbilityScore
      ),
    ];
  });

  return (
    <div className="preview-column shadow-md p-6 text-left">
      <div
        id="character-preview"
        className="text-sm font-sans leading-tight .leading-6"
      >
        <h3 className="text-xl">{characterState.name}</h3>
        <strong>{characterState.race}</strong>
        <h5 className={styles.abilityHeader}>Defense</h5>
        <div className="space-y-1 mb-3">
          <div>
            <strong>HP</strong>{' '}
            {calculateHealthPoints(characterState.abilities.constitution)}
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <strong>AC:</strong> 10
            </div>
            <div className="w-1/3">
              <strong>TAC:</strong> 10
            </div>
            <div className="w-1/3">
              <strong>FFAC:</strong> 10
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="w-1/3">
              <strong>Ref:</strong> 0
            </div>
            <div className="w-1/3">
              <strong>Fort:</strong> 0
            </div>
            <div className="w-1/3">
              <strong>Will:</strong> 0
            </div>
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Offense</h5>
        <div className="mb-3 space-y-1">
          <div>
            <b>Speed</b> 30
          </div>
          <div>
            <b>Melee</b> +0
          </div>

          <div>
            <b>Ranged</b> +0
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Abilities</h5>
        <div className={clsx(styles.previewAbilities)}>
          {previewAbilities.map(([label, abilityValue]) => {
            return (
              <AbilityPreview
                label={label}
                ability={abilityValue}
                key={label}
              />
            );
          })}
        </div>
        <h5 className={styles.abilityHeader}>Feats</h5>
      </div>
    </div>
  );
}
