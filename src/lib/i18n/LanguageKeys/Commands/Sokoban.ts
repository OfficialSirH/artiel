import { FT, T, type Value } from '@skyra/http-framework-i18n';

// Root
export const RootName = T('commands/sokoban:name');
export const RootDescription = T('commands/sokoban:description');

// Options

// Errors
export const SokobanInvalidComponent = FT<Value<string>>('commands/sokoban:invalidComponent');

// Game
export const Victory = FT<Value<{ seconds: string; moves: number }>>('commands/sokoban:victory');
export const Defeat = T('commands/sokoban:defeat');
