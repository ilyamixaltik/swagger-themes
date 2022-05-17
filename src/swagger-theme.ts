import * as fs from 'fs';
import { SwaggerThemeName, VersionSwagger } from './types';

export class SwaggerTheme {
  constructor(readonly version: VersionSwagger) {}

  getBuffer(name: SwaggerThemeName) {
    if (!this.version || !name) return '';

    return fs.readFileSync(
      __dirname + `/../themes/${this.version}/${name}.css`,
      'utf8'
    );
  }
}