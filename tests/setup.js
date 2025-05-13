import "@testing-library/jest-dom";
import { vi } from "vitest";

Object.defineProperty(HTMLMediaElement.prototype, 'play', {
  configurable: true,
  writable: true,
  value: vi.fn(),
});