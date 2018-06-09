import { resolve } from 'path'
/**
 * A testing context for the usually package.
 */
export default class Context {
  /**
   * A test usage object.
   */
  get SNAPSHOT_DIR() {
    return resolve(__dirname, '../snapshot')
  }
  get usage() {
    return {
      '-h': 'print help',
      '-c': 'execute this command',
    }
  }
}
