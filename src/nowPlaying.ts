import { execFile } from 'child_process';
import { promisify } from 'util';

const asyncExecFile = promisify(execFile);

const getWindowTitle = async (processName:string) => {
  if (process.platform == 'win32') {
    const { stdout, stderr } = await asyncExecFile('powershell', [
      `(Get-Process ${processName}).MainWindowTitle`
    ]);
    return stdout.trim();
  } else {
    // TODO:
    throw new Error('Unsupported platform');
  }
}

const nowPlaying = async (processName:string) => {
  const windowTitle = await getWindowTitle(processName);
  return windowTitle && !windowTitle.toLowerCase().includes(processName) ? windowTitle : 'No track playing';
}

export default nowPlaying;
