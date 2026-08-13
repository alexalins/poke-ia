import type { CSSProperties } from 'react';
import type { PokemonDetail } from '../../types';
import type { MetricIconKind } from '../presenters';

export type PokemonTypeTheme = {
  panel: string;
  panelStyle: CSSProperties;
  heroStyle: CSSProperties;
  badge: string;
  accent: string;
  bar: string;
};

const typeThemes: Record<string, PokemonTypeTheme> = {
  normal: {
    panel: 'border-slate-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fff7ed 0%, #f8fafc 48%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(251, 191, 36, 0.32), transparent 56%), linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)' },
    badge: 'bg-slate-900 text-white',
    accent: 'text-slate-950',
    bar: 'bg-slate-900',
  },
  fire: {
    panel: 'border-red-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 48%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(249, 115, 22, 0.35), transparent 58%), linear-gradient(180deg, #fed7aa 0%, #fb923c 100%)' },
    badge: 'bg-red-700 text-white',
    accent: 'text-red-950',
    bar: 'bg-red-700',
  },
  water: {
    panel: 'border-sky-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(14, 165, 233, 0.35), transparent 58%), linear-gradient(180deg, #bae6fd 0%, #38bdf8 100%)' },
    badge: 'bg-sky-700 text-white',
    accent: 'text-sky-950',
    bar: 'bg-sky-700',
  },
  grass: {
    panel: 'border-emerald-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 48%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(34, 197, 94, 0.3), transparent 58%), linear-gradient(180deg, #bbf7d0 0%, #4ade80 100%)' },
    badge: 'bg-emerald-700 text-white',
    accent: 'text-emerald-950',
    bar: 'bg-emerald-700',
  },
  electric: {
    panel: 'border-amber-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(234, 179, 8, 0.35), transparent 58%), linear-gradient(180deg, #fde68a 0%, #facc15 100%)' },
    badge: 'bg-amber-500 text-slate-950',
    accent: 'text-amber-950',
    bar: 'bg-amber-500',
  },
  psychic: {
    panel: 'border-pink-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(236, 72, 153, 0.28), transparent 58%), linear-gradient(180deg, #f9a8d4 0%, #fb7185 100%)' },
    badge: 'bg-pink-700 text-white',
    accent: 'text-pink-950',
    bar: 'bg-pink-700',
  },
  ice: {
    panel: 'border-cyan-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #f0fdfa 0%, #cffafe 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(45, 212, 191, 0.3), transparent 58%), linear-gradient(180deg, #a7f3d0 0%, #67e8f9 100%)' },
    badge: 'bg-cyan-700 text-white',
    accent: 'text-cyan-950',
    bar: 'bg-cyan-700',
  },
  rock: {
    panel: 'border-stone-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(120, 113, 108, 0.3), transparent 58%), linear-gradient(180deg, #d6d3d1 0%, #a8a29e 100%)' },
    badge: 'bg-stone-800 text-white',
    accent: 'text-stone-950',
    bar: 'bg-stone-800',
  },
  default: {
    panel: 'border-slate-950',
    panelStyle: { backgroundImage: 'linear-gradient(135deg, #fff7ed 0%, #f8fafc 50%, #ffffff 100%)' },
    heroStyle: { backgroundImage: 'radial-gradient(circle at top, rgba(148, 163, 184, 0.28), transparent 58%), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)' },
    badge: 'bg-slate-900 text-white',
    accent: 'text-slate-950',
    bar: 'bg-slate-900',
  },
};

function getTheme(typeName: string) {
  return typeThemes[typeName] ?? typeThemes.default;
}

function formatMetric(value: number, unit: string) {
  return `${Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)} ${unit}`;
}

function formatName(value: string) {
  return value.replace('-', ' ');
}

export function usePokemonDetailView(pokemon: PokemonDetail) {
  const theme = getTheme(pokemon.types[0] ?? 'default');
  const baseExperience = pokemon.baseExperience ?? 0;
  const height = formatMetric(pokemon.height, 'm');
  const weight = formatMetric(pokemon.weight, 'kg');

  return {
    theme,
    idLabel: `#${pokemon.id.toString().padStart(3, '0')}`,
    baseExperience,
    metrics: [
      { icon: 'height' as MetricIconKind, label: 'Altura', value: height, tone: 'bg-sky-100 text-sky-950' },
      { icon: 'weight' as MetricIconKind, label: 'Peso', value: weight, tone: 'bg-amber-100 text-amber-950' },
      { icon: 'xp' as MetricIconKind, label: 'Base exp.', value: `${baseExperience}`, tone: 'bg-emerald-100 text-emerald-950' },
      { icon: 'ability' as MetricIconKind, label: 'Habilidades', value: `${pokemon.abilities.length}`, tone: 'bg-rose-100 text-rose-950' },
    ],
    stats: pokemon.stats.map((stat) => ({
      ...stat,
      label: formatName(stat.name),
      percentage: Math.min(100, Math.round((stat.value / 255) * 100)),
    })),
    abilities: pokemon.abilities.map((ability) => ({
      ...ability,
      label: `${formatName(ability.name)}${ability.isHidden ? ' · hidden' : ''}`,
    })),
    format: { height, weight },
  };
}

export type PokemonDetailViewModel = ReturnType<typeof usePokemonDetailView>;
