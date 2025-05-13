import { vi } from "vitest";

export const defaultKeyNotesContextMock = {
  playRandomNote: vi.fn(),
  playKey: vi.fn(),
  checkAnswer: vi.fn(),
  gameState: "Normal",
  resetGame: vi.fn(),
  count: 0,
};