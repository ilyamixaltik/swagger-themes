import * as fs from 'fs';
import { DefaultConfig, SwaggerThemeName, VersionSwagger } from './types';

export class SwaggerTheme {
  constructor(readonly version?: VersionSwagger) {}

  getBuffer(name: SwaggerThemeName) {
    if (!name) return '';
    if (this.version) {
      throw new Error('Explicit version indication is deprecated')
    }

    return fs.readFileSync(
      __dirname + `/../themes/${name}.css`,
      'utf8'
    );
  }

  getDefaultConfig(theme: SwaggerThemeName): DefaultConfig {
    const buffer: string = this.getBuffer(theme);

    return {
      explorer: true,
      customCss: buffer
    }
  }
}
