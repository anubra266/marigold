import { OptionalConfig } from 'tailwindcss/types/config';

declare const createPreset: (name: string, config: Partial<OptionalConfig>) => Partial<OptionalConfig> & {
    content: string[];
};

export { createPreset };
