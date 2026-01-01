// Exporting utility functions
export function logStep(step: string): void {
  console.log("STEP:", step);
}

export function validateStatus(code: number): boolean {
  return code === 200;
}
