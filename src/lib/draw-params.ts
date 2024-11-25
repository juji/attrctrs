import { type Plotter } from '@/plotters/plotter';

export type ExtraParams = {
  itterationPerCycle?: number,
  totalCycle?: number,
  opacity?: number,
}

export type DrawParams = ExtraParams & {
  canvas: HTMLCanvasElement,
  plotter: Plotter,
}