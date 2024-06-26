import { FT, T } from '@skyra/http-framework-i18n';

// Root
export const RootName = T('commands/dice:name');
export const RootDescription = T('commands/dice:description');

export const OptionsFaces = 'commands/dice:optionsFaces';
export const OptionsRolls = 'commands/dice:optionsRolls';
export const OptionsModifier = 'commands/dice:optionsModifier';
export const OptionsPreset = 'commands/dice:optionsPreset';
export const OptionsSelection = 'commands/dice:optionsSelection';
export const OptionsOnCriticalSuccess = 'commands/dice:optionsOnCriticalSuccess';
export const OptionsOnCriticalFailure = 'commands/dice:optionsOnCriticalFailure';
export const OptionsHide = 'commands/dice:optionsHide';

export const Title = FT<{ dice: string }>('commands/dice:title');

export const PresetD2 = T('commands/dice:presetD2');
export const PresetD4 = T('commands/dice:presetD4');
export const PresetD6 = T('commands/dice:presetD6');
export const PresetD8 = T('commands/dice:presetD8');
export const PresetD10 = T('commands/dice:presetD10');
export const PresetD10Ren = T('commands/dice:presetD10Ren');
export const PresetD12 = T('commands/dice:presetD12');
export const PresetD20 = T('commands/dice:presetD20');
export const PresetD100 = T('commands/dice:presetD100');
export const PresetFate = T('commands/dice:presetFate');

export const SelectionAddition = T('commands/dice:selectionAddition');
export const SelectionGreatest = T('commands/dice:selectionGreatest');
export const SelectionLeast = T('commands/dice:selectionLeast');

export const OnCriticalNothing = T('commands/dice:onCriticalNothing');
export const OnCriticalRerollOnce = T('commands/dice:onCriticalRerollOnce');
export const OnCriticalRerollTwice = T('commands/dice:onCriticalRerollTwice');
export const OnCriticalRerollThrice = T('commands/dice:onCriticalRerollThrice');
export const OnCriticalRerollIndefinitely = T('commands/dice:onCriticalRerollIndefinitely');
